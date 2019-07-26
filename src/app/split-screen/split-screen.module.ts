import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitScreenComponent } from './split-screen.component';
import { CoreModule } from 'app/core.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NavBarModule } from './nav-bar/nav-bar.module';
import { SplitScreenSideService } from './split-screen.service';

@NgModule({
	declarations: [SplitScreenComponent],
	imports: [
		CommonModule
		, CoreModule
		, NavBarModule
		, DragDropModule
	],
	providers: [SplitScreenSideService],
	exports: [SplitScreenComponent]
})
export class SplitScreenModule { }
