import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongToPianoComponent } from './song-to-piano.component';
import { SongToPianoService } from './song-to-piano.service';

@NgModule({
	declarations: [SongToPianoComponent],
	providers: [SongToPianoService],
	imports: [
		CommonModule
	],
	exports: [SongToPianoComponent]
})
export class SongToPianoModule { }
