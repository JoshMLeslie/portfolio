import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SongToPianoService } from '../song-to-piano.service';

@Component({
	selector: 'app-song-to-piano',
	templateUrl: './song-to-piano.component.html',
	styleUrls: ['./song-to-piano.component.scss']
})
export class SongToPianoComponent implements OnInit {

	@ViewChild('volumeInput', {static: true}) volumeInput: ElementRef;

	constructor(private songService: SongToPianoService) { }

	ngOnInit() {
		// enable volume input control for user's speakers
		this.volumeInput.nativeElement.addEventListener('change', (opts: any) => {
			const currVolume = opts.value;
			this.songService.gainNode.gain.value = currVolume;

			console.log('curr_volume ', currVolume);
		});

		this.songService.webaudioToolingObj();
	}

}
