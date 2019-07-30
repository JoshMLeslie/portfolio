import { Injectable } from '@angular/core';
import { WindowService } from '../../../../shared/window.service';

/** Source: https://stackoverflow.com/a/27852403 */
@Injectable({
	providedIn: 'root'
})
export class SongToPianoService {

	public gainNode = null;

	private audioContext = new AudioContext();
	private BUFF_SIZE = 16384;
	private microphoneStream = null;
	private scriptProcessorNode = null;
	private scriptProcessorFFTNode = null;
	private analyserNode = null;
	private navigator: Navigator;

	constructor(window: WindowService) {
		this.navigator = window.navigator;

	}

	webaudioToolingObj() {
		console.log('audio is starting up ...');

		const getUserMedia = this.navigator.mediaDevices.getUserMedia;

		if (getUserMedia) {
			const opts: MediaStreamConstraints = {audio: true};
			this.navigator.mediaDevices.getUserMedia(opts)
				.then((stream) => {
					console.log(stream);
					this.startMicrophone(stream);
				})
				.catch((e) => {
					console.error(e);
					alert('Error capturing audio.');
				});
		} else {
			alert('getUserMedia not supported in this browser.');
		}
	}

	startMicrophone(stream) {
		this.gainNode = this.audioContext.createGain();
		this.gainNode.connect(this.audioContext.destination);

		this.microphoneStream = this.audioContext.createMediaStreamSource(stream);
		this.microphoneStream.connect(this.gainNode);

		this.scriptProcessorNode = this.audioContext.createScriptProcessor(this.BUFF_SIZE, 1, 1);

		this.microphoneStream.connect(this.scriptProcessorNode);

		// --- setup FFT
		this.scriptProcessorFFTNode = this.audioContext.createScriptProcessor(2048, 1, 1);
		this.scriptProcessorFFTNode.connect(this.gainNode);

		this.analyserNode = this.audioContext.createAnalyser();
		this.analyserNode.smoothingTimeConstant = 0;
		this.analyserNode.fftSize = 2048;

		this.microphoneStream.connect(this.analyserNode);

		this.analyserNode.connect(this.scriptProcessorFFTNode);

		this.scriptProcessorFFTNode.onaudioprocess = () => {
			// get the average for the first channel
			const arr = new Uint8Array(this.analyserNode.frequencyBinCount);
			this.analyserNode.getByteFrequencyData(arr);
		};
	}
}
