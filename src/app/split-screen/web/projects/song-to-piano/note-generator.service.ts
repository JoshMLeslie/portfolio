import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { distinctUntilChanged, scan, take } from 'rxjs/operators';
import { PIANO_KEYS } from './piano-keys.config';

const LOGGER = (v: any) => console.log(v);

@Injectable({
	providedIn: 'root'
})
export class NoteGeneratorService {
	/* Work largely done by Chris Wilson (c) 2014 used under The MIT License (MIT) -- https://github.com/cwilso/PitchDetect */

	private _noteList = new BehaviorSubject<string>(''); // tslint:disable-line:variable-name
	public noteList$ = this._noteList.asObservable().pipe(
		distinctUntilChanged()
		, scan((acc, val) => acc += val + ' ')
	); // could also collect it in the BeahaviorSubject, but this way there's less visible code for tracking changes?

	isPlaying = false;

	buflen = 256;
	buf = new Float32Array(this.buflen);
	MIN_SAMPLES = 0;
	GOOD_ENOUGH_CORRELATION = 0.95; // this is the "bar" for how close a correlation needs to be
	resolution: 100; // miliseconds between reads / updates
	MAX_SIZE: number;
	audioContext: AudioContext = new AudioContext();
	analyser: AnalyserNode;
	mediaStreamSource: MediaStreamAudioSourceNode;

	constructor() {
		this.MAX_SIZE = Math.max(4, Math.floor(this.audioContext.sampleRate / 5000)); 	// corresponds to a 5kHz signal
	}

	public toggleLiveInput() {
		if (this.isPlaying) {
			this.stopPlaying();
			return;
		}

		const audioOptions = { audio: { advanced: [
			{ echoCancellation: false },
			{ autoGainControl: false },
			{ noiseSuppression: false },
		]}};

		navigator.mediaDevices.getUserMedia(audioOptions).then(stream => {
			// Create an AudioNode from the stream.
			this.mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
			// Connect it to the destination.
			this.analyser = this.audioContext.createAnalyser();
			this.analyser.fftSize = 512;
			this.mediaStreamSource.connect(this.analyser);
			this.updatePitch();

			this.startPlaying();
		})
		.catch(e => {
			alert(e);
			this.stopPlaying();
		});
	}

	private stopPlaying() {
		this.isPlaying = false;
		this.audioContext.suspend().then(LOGGER, LOGGER).catch(LOGGER);
	}
	private startPlaying() {
		this.isPlaying = true;
		this.audioContext.resume().then(LOGGER, LOGGER).catch(LOGGER);
	}

	private autoCorrelate() {
		const sampleRate = this.audioContext.sampleRate;
		const SIZE = this.buflen;
		const MAX_SAMPLES = Math.floor(this.buflen / 2);
		const correlations = {};
		let bestOffset = -1;
		let bestCorrelation = 0;
		let rms = 0;
		let foundGoodCorrelation = false;
		let lastCorrelation = 1;

		for (let i = 0; i < SIZE; i++) {
			const val = this.buf[i];
			rms += val * val;
		}

		rms = Math.sqrt(rms / SIZE);

		// not enough signal
		if (rms < 0.01) { return -1; }

		for (let offset = this.MIN_SAMPLES; offset < MAX_SAMPLES; offset++) {
			let correlation = 0;

			for (let i = 0; i < MAX_SAMPLES; i++) {
				correlation += Math.abs((this.buf[i]) - (this.buf[i + offset]));
			}

			correlations[offset] = 1 - (correlation / MAX_SAMPLES); // store it, for the tweaking we need to do below.

			if ((correlation > this.GOOD_ENOUGH_CORRELATION) && (correlation > lastCorrelation)) {
				foundGoodCorrelation = true;
				if (correlation > bestCorrelation) {
					bestCorrelation = correlation;
					bestOffset = offset;
				}
			} else if (foundGoodCorrelation) {
				/**
				 * short-circuit - A good correlation was found, then a bad one.
				 * Without this catch, you'd see duplicates.
				 *
				 * Now we need to tweak the offset - by interpolating between the values to the left and right of the
				 * best offset, and shifting it.
				 *
				 * This is complex, and HACKY in this code (happy to take PRs!) -
				 * we need to do a curve fit on correlations around best_offset in order to better determine precise
				 * (anti-aliased) offset.
				 *
				 * best_offset >=1
				 * and since foundGoodCorrelation cannot go to true until the second pass (offset=1)
				 * and we can't drop into this clause until the following pass (else if).
				 */
				const shift = (correlations[bestOffset + 1] - correlations[bestOffset - 1]) / correlations[bestOffset];
				return sampleRate / (bestOffset + (8 * shift));
			}
			lastCorrelation = correlation;
		}

		return bestCorrelation > 0.01 ? sampleRate / bestOffset : -1;
	}

	private updatePitch() {
		this.analyser.getFloatTimeDomainData(this.buf);
		const pitch = this.autoCorrelate();

		if (pitch !== -1) {
			this.printNote(pitch);
		}
		timer(this.resolution).pipe(take(1)).subscribe(() => this.updatePitch());
	}

	private printNote(pitch: number) {
		const pianoKey = Math.floor(12 * Math.log2(pitch / 440) + 49);
		const noteEl = PIANO_KEYS[pianoKey];

		this._noteList.next(noteEl);
	}
}
