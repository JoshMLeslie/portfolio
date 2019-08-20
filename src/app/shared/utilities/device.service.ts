import { Injectable } from '@angular/core';
import { WindowService } from './window.service';

@Injectable({
	providedIn: 'root'
})
export class DeviceService {
	isMobile = false;

	constructor(window: WindowService) {
		this.isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent));
	}
}
