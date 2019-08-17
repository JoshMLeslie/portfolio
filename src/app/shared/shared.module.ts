import { NgModule } from '@angular/core';
import { CoreModule, WindowService, LogService, SideService } from './utilities';

@NgModule({
	declarations: [],
	imports: [
		CoreModule
	],
	exports: [
		CoreModule,
	],
	providers: [WindowService, LogService, SideService]
})
export class SharedModule { }
