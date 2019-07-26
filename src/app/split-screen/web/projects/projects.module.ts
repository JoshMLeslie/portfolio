import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'app/shared/core.module';
import { SongToPianoModule } from './song-to-piano/song-to-piano.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule
		, CoreModule
		, SongToPianoModule
	]
})
export class WebProjectsModule { }
