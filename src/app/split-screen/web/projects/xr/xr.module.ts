import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XrComponent } from './xr.component';
import { CoreModule } from 'app/shared/core.module';

@NgModule({
	declarations: [XrComponent],
	imports: [
		CommonModule
		, CoreModule
	],
	exports: [XrComponent]
})
export class XRModule { }
