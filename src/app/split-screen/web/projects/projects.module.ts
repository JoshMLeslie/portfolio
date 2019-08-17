import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'app/shared/utilities/core.module';
import { SongToPianoModule } from './song-to-piano/song-to-piano.module';
import { WebProjectsComponent } from './projects.component';
import { XRModule } from './xr/xr.module';
import { ProjecTileModule } from 'app/shared/project-tile/project-tile.module';
import { WebProjectsRoutingModule } from './projects.routing';

@NgModule({
	declarations: [WebProjectsComponent],
	imports: [
		CommonModule
		, WebProjectsRoutingModule
		, CoreModule
		, ProjecTileModule
		, SongToPianoModule
		, XRModule
	],
	exports: [WebProjectsComponent]
})
export class WebProjectsModule { }
