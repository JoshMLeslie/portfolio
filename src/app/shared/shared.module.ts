import { NgModule } from '@angular/core';
import { CoreModule, WindowService, LogService, SideService } from './utilities';
import { SideResolver } from './utilities/side.resolver';
import { DeviceService } from './utilities/device.service';

@NgModule({
	declarations: [],
	imports: [
		CoreModule
	],
	exports: [
		CoreModule,
	],
	providers: [
		WindowService,
		LogService,
		SideService,
		SideResolver,
		DeviceService
	]
})
export class SharedModule { }
