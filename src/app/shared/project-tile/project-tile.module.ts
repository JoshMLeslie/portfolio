import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'app/shared/utilities/core.module';
import { ProjectTileComponent } from './project-tile.component';

@NgModule({
	declarations: [ProjectTileComponent],
	imports: [
		CommonModule
		, CoreModule
	],
	providers: [],
	exports: [ProjectTileComponent]
})
export class ProjecTileModule { }
