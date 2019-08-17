import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { CoreModule } from 'app/shared/utilities/core.module';
import { RotaryMenuModule } from 'app/shared/rotary-menu/rotary-menu.module';

@NgModule({
	declarations: [NavBarComponent],
	imports: [
		CoreModule
		, RotaryMenuModule
	],
	exports: [NavBarComponent]
})
export class NavBarModule { }
