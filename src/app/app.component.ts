import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const IconList = new Map([
	// icon_name, icon_relative_path
	['github', './assets/icons/github.svg'],
	['linkedin', './assets/icons/linkedin.svg']
]);

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'portfolio';

	constructor(
		private iconRegistry: MatIconRegistry
		, private domSanitizer: DomSanitizer
	) {
		IconList.forEach((key: string, value: string) => {
			this.iconRegistry.addSvgIcon(
				value
				, this.domSanitizer.bypassSecurityTrustResourceUrl(key)
			);
		});
	}
}
