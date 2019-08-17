import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongToPianoComponent } from './component/song-to-piano.component';
import { SongToPianoService } from './song-to-piano.service';
import { NoteGeneratorService } from './note-generator.service';
import { CoreModule } from 'app/shared/utilities/core.module';

@NgModule({
	declarations: [SongToPianoComponent],
	providers: [
		SongToPianoService
		, NoteGeneratorService
	],
	imports: [
		CommonModule
		, CoreModule
	],
	exports: [SongToPianoComponent]
})
export class SongToPianoModule { }
