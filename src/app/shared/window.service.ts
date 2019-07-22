import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class WindowService {

	constructor() { }

	get window(): Window {
		return window;
	}

	get navigator() {
		return this.window.navigator;
	}

	get document() {
		return this.window.document;
	}
}
