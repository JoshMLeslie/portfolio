import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteGeneratorService } from '../note-generator.service';
import { SongToPianoService } from '../song-to-piano.service';

@Component({
	selector: 'app-song-to-piano',
	templateUrl: './song-to-piano.component.html',
	styleUrls: ['./song-to-piano.component.scss']
})
export class SongToPianoComponent implements OnInit {

	@ViewChild('volumeInput', {static: true}) volumeInput: ElementRef;

	note$: Observable<string>;

	constructor(
		private songService: SongToPianoService
		, private noteService: NoteGeneratorService
	) { }

	ngOnInit() {
		// enable volume input control for user's speakers
		this.volumeInput.nativeElement.addEventListener('change', (opts: any) => {
			const currVolume = opts.value;
			this.songService.gainNode.gain.value = currVolume;

			console.log('curr_volume ', currVolume);
		});

		this.note$ = this.noteService.noteList$;
		// this.songService.webaudioToolingObj();
	}

	toggleNoteInput() {
		this.noteService.toggleLiveInput();
	}

}
