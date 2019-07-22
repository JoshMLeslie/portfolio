import { Component, OnInit } from '@angular/core';
import { XRService } from './xr.service';
import { ISessions } from './xr';

@Component({
	selector: 'app-xr',
	templateUrl: './xr.component.html',
	styleUrls: ['./xr.component.scss']
})
export class XrComponent implements OnInit {

	userChoice: 'ar' | 'vr' | 'normal';
	allowedChoices: ISessions;

	constructor(private xrService: XRService) { }

	ngOnInit() {
		this.xrService.setSessionType().subscribe(modes => {
			console.log(modes);
			// debugger
			this.allowedChoices = modes;
		});
	}

}
