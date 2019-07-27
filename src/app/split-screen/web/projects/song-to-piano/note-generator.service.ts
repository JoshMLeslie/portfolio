import { Injectable } from '@angular/core';
import { WindowService } from 'app/shared/window.service';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { PIANO_KEYS } from './piano-keys.config';
 
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
		this.MAX_SIZE = Math.max(4, Math.floor(this.audioContext.sampleRate / 5000)); 	// corresponds to a 5kHz signal
	}

	/* Work largely done by Chris Wilson (c) 2014 used under The MIT License (MIT) -- https://github.com/cwilso/PitchDetect*/

	public _noteList = new BehaviorSubject<string>('');
	public noteList$ = this._noteList.asObservable();

	isPlaying = false;
	buflen = 512;
	buf = new Float32Array(this.buflen);
	MIN_SAMPLES = 0;  // will be initialized when AudioContext is created.
	GOOD_ENOUGH_CORRELATION = 0.9; // this is the "bar" for how close a correlation needs to be
	resolution: 1000; // miliseconds between reads / updates
	
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

	private static frequencyFromNoteNumber(note) {
		return 440 * Math.pow(2, (note - 69) / 12);
	}
	private static centsOffFromPitch(frequency, note) {
		return Math.floor(1200 * Math.log(frequency / NoteGeneratorService.frequencyFromNoteNumber(note)) / Math.log(2));
	}

	public stopPlaying() {
		this.sourceNode.stop(0);
		this.sourceNode = null;
		this.analyser = null;
		this.isPlaying = false;
		this.window.cancelAnimationFrame(this.rafID);

		this.$top.next();
	}

	public toggleLiveInput() {
		if (this.isPlaying) {
			this.stopPlaying();
			return 'start live input';
		}

		const audioOptions = { audio: { advanced: [
			{ echoCancellation: false },
			{ autoGainControl: false },
			{ noiseSuppression: false },
		]}};

		navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
			// Create an AudioNode from the stream.
			this.mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
			// Connect it to the destination.
			this.analyser = this.audioContext.createAnalyser();
			this.analyser.fftSize = 512;
			this.mediaStreamSource.connect(this.analyser);
			this.updatePitch();

			this.isPlaying = true;
		})
		.catch(e => {
			alert(e);
			this.isPlaying = false;
		});

		return 'stop';
	}

	public togglePlayback() {
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

	private autoCorrelate(buf, sampleRate) {
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

	private updatePitch() {
		this.analyser.getFloatTimeDomainData(this.buf);
		const ac = this.autoCorrelate(this.buf, this.audioContext.sampleRate);

		ac === -1 ? this.setVague() : this.printNote(ac);

		timer(this.resolution).pipe(take(1)).subscribe(() => this.updatePitch());
	}

	private setVague() {
		// this.detectorElem.className = 'vague';
		// this.pitchElem.innerText = '--';
		// this.noteElem.innerText = '-';
		// this.detuneElem.className = '';
		// this.detuneAmount.innerText = '--';
	}

	private printNote(ac) {
		this.pitch = ac;

		// const [noteEl, note] = this.forStandard();
		const [noteEl, note] = this.forPiano();

		this._noteList.next(noteEl + ' ');

		const detune = NoteGeneratorService.centsOffFromPitch(this.pitch, note);
		// if (detune == 0) {
		// 	detuneElem.className = "";
		// 	detuneAmount.innerHTML = "--";
		// } else {
		// 	detune < 0 ? detuneElem.className = "flat" : detuneElem.className = "sharp";
		// 	detuneAmount.innerHTML = Math.abs(detune);
		// }
	}

	forPiano(): [string, number] {
		const pianoKey = Math.floor(12 * Math.log2(this.pitch / 440) + 49);
		return [PIANO_KEYS[pianoKey], pianoKey];
	}

	forStandard(): [string, number] {
		const noteNum = 12 * (Math.log(this.pitch / 440) / Math.log(2));
		const note = Math.round(noteNum) + 69;

		return [NOTES[note % 12], note];
	}
}
