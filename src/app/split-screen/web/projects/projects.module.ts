import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'app/shared/core.module';
import { SongToPianoModule } from './song-to-piano/song-to-piano.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
	declarations: [ProjectsComponent],
	imports: [
		CommonModule
		, CoreModule
		, SongToPianoModule
	],
	exports: [ProjectsComponent]
})
export class WebProjectsModule { }
