import { NgModule } from '@angular/core';
import { CoreModule } from './core.module';
import { WindowService } from './window.service';
import { SideService } from './side.service';


@NgModule({
	declarations: [],
	imports: [
		CoreModule
	],
	exports: [
		CoreModule
	],
	providers: [WindowService, SideService]
})
export class SharedModule { }
