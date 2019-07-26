import { NgModule } from '@angular/core';
import { RotaryMenuComponent } from './rotary-menu.component';
import { CoreModule } from 'app/shared/core.module';

@NgModule({
	declarations: [RotaryMenuComponent],
	imports: [
		CoreModule
	],
	exports: [RotaryMenuComponent]
})
export class RotaryMenuModule { }
