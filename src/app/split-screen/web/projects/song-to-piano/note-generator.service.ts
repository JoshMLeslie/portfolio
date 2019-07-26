import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, from, Subject } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { WindowService } from 'app/shared/window.service';

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

@Injectable({
	providedIn: 'root'
})
export class NoteGeneratorService {
	window: Window;

	constructor(windowService: WindowService) {
		this.window = windowService.window;
		this.window['AudioContext'] = this.window['AudioContext'] || this.window['webkitAudioContext']; // tslint:disable-line:no-string-literal

		this.audioContext = new AudioContext();
		this.MAX_SIZE = Math.max(4, Math.floor(this.audioContext.sampleRate / 5000));
	}

	/* Work largely done by Chris Wilson (c) 2014 used under The MIT License (MIT) Copyright */

	public noteList = new BehaviorSubject<string>('');

	isPlaying = false;
	buflen = 1024;
	buf = new Float32Array(this.buflen);
	MIN_SAMPLES = 0;  // will be initialized when AudioContext is created.
	GOOD_ENOUGH_CORRELATION = 0.9; // this is the "bar" for how close a correlation needs to be

	audioContext: AudioContext;
	MAX_SIZE: number;

	sourceNode;
	analyser;
	theBuffer;
	mediaStreamSource;
	detectorElem;
	canvasElem;
	waveCanvas;
	pitchElem;
	noteElem;
	detuneElem;
	detuneAmount;
	rafID;
	tracks;
	pitch;
	livePitch;
	isLiveInput;

	private $top = new Subject<boolean>();

	static frequencyFromNoteNumber(note) {
		return 440 * Math.pow(2, (note - 69) / 12);
	}
	static centsOffFromPitch(frequency, note) {
		return Math.floor(1200 * Math.log(frequency / NoteGeneratorService.frequencyFromNoteNumber(note)) / Math.log(2));
	}

	stopPlaying() {
		this.sourceNode.stop(0);
		this.sourceNode = null;
		this.analyser = null;
		this.isPlaying = false;
		this.window.cancelAnimationFrame(this.rafID);
	}

	toggleLiveInput() {
		if (this.isPlaying) {
			this.stopPlaying();
			return 'start live input';
		}
		const audioOptions = { audio: { advanced: [
			{ echoCancellation: false },
			{ autoGainControl: false },
			{ noiseSuppression: false },
		]}};

		from(navigator.mediaDevices.getUserMedia(audioOptions)).pipe(
			tap(stream => {
				// Create an AudioNode from the stream.
				this.mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
				// Connect it to the destination.
				this.analyser = this.audioContext.createAnalyser();
				this.analyser.fftSize = 2048;
				this.mediaStreamSource.connect(this.analyser);
				this.updatePitch();
			}),
			catchError(e => {
				alert(e);
				return EMPTY;
			}),
			takeUntil(this.$top)
		).subscribe();

		return 'stop';
	}

	togglePlayback() {
		if (this.isPlaying) {
			this.stopPlaying();
			return 'start';
		}

		this.sourceNode = this.audioContext.createBufferSource();
		this.sourceNode.buffer = this.theBuffer;
		this.sourceNode.loop = true;

		this.analyser = this.audioContext.createAnalyser();
		this.analyser.fftSize = 2048;
		this.sourceNode.connect(this.analyser);
		this.analyser.connect(this.audioContext.destination);
		this.sourceNode.start(0);
		this.isPlaying = true;
		this.isLiveInput = false;
		this.updatePitch();

		return 'stop';
	}

	autoCorrelate(buf, sampleRate) {
		const SIZE = buf.length;
		const MAX_SAMPLES = Math.floor(SIZE / 2);
		const correlations = new Array(MAX_SAMPLES);
		let bestOffset = -1;
		let bestCorrelation = 0;
		let rms = 0;
		let foundGoodCorrelation = false;
		let lastCorrelation = 1;

		for (let i = 0; i < SIZE; i++) {
			const val = buf[i];
			rms += val * val;
		}

		rms = Math.sqrt(rms / SIZE);

		if (rms < 0.01) {
			// not enough signal
			return -1;
		}

		for (let offset = this.MIN_SAMPLES; offset < MAX_SAMPLES; offset++) {
			let correlation = 0;

			for (let i = 0; i < MAX_SAMPLES; i++) {
				correlation += Math.abs((buf[i]) - (buf[i + offset]));
			}

			correlations[offset] = 1 - (correlation / MAX_SAMPLES); // store it, for the tweaking we need to do below.

			if ((correlation > this.GOOD_ENOUGH_CORRELATION) && (correlation > lastCorrelation)) {
				foundGoodCorrelation = true;
				if (correlation > bestCorrelation) {
					bestCorrelation = correlation;
					bestOffset = offset;
				}
			} else if (foundGoodCorrelation) {
				// short-circuit - we found a good correlation, then a bad one, so we'd just be seeing copies from here.
				// Now we need to tweak the offset - by interpolating between the values to the left and right of the
				// best offset, and shifting it a bit.  This is complex, and HACKY in this code (happy to take PRs!) -
				// we need to do a curve fit on correlations[] around best_offset in order to better determine precise
				// (anti-aliased) offset.

				// we know best_offset >=1,
				// since foundGoodCorrelation cannot go to true until the second pass (offset=1), and
				// we can't drop into this clause until the following pass (else if).
				const shift = (correlations[bestOffset + 1] - correlations[bestOffset - 1]) / correlations[bestOffset];
				return sampleRate / (bestOffset + (8 * shift));
			}
			lastCorrelation = correlation;
		}

		return bestCorrelation > 0.01 ? sampleRate / bestOffset : -1;
	}

	updatePitch() {
		this.analyser.getFloatTimeDomainData(this.buf);
		const ac = this.autoCorrelate(this.buf, this.audioContext.sampleRate);

		ac === -1 ? this.setVague() : this.printNote(ac);

		// this.rafID = window.requestAnimationFrame(updatePitch);
	}

	private setVague() {
		this.detectorElem.className = 'vague';
		this.pitchElem.innerText = '--';
		this.noteElem.innerText = '-';
		this.detuneElem.className = '';
		this.detuneAmount.innerText = '--';
	}

	private printNote(ac) {
		this.detectorElem.className = 'confident';
		this.pitch = ac;
		this.pitchElem.innerText = Math.round(this.pitch);

		const noteNum = 12 * (Math.log(this.pitch / 440) / Math.log(2));
		const note = Math.round(noteNum) + 69;

		const noteEl = NOTES[note % 12];
		this.noteElem.innerHTML = noteEl;

		this.noteList.next(this.noteList.value + (noteEl + ' '));

		const detune = NoteGeneratorService.centsOffFromPitch(this.pitch, note);
		// if (detune == 0) {
		// 	detuneElem.className = "";
		// 	detuneAmount.innerHTML = "--";
		// } else {
		// 	detune < 0 ? detuneElem.className = "flat" : detuneElem.className = "sharp";
		// 	detuneAmount.innerHTML = Math.abs(detune);
		// }
	}
}
