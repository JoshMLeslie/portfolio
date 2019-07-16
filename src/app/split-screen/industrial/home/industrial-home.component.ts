import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './industrial-home.component.html',
	styleUrls: ['./industrial-home.component.scss']
})
export class IndustrialHomeComponent implements OnInit {
	window: Window;
	constructor() { this.window = window; }

	ngOnInit() {
	}

}
