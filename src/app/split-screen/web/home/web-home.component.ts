import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-web-home',
	templateUrl: './web-home.component.html',
	styleUrls: ['./web-home.component.scss']
})
export class WebHomeComponent implements OnInit {
	window: Window;
	constructor(private active: ActivatedRoute) { 
		this.window = window;
		console.log(this.active);
	}

	ngOnInit() {
	}

}
