import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-project-tile',
	templateUrl: './project-tile.component.html',
	styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent {
	@Input() name: string;
	@Input() link: string;

	constructor() { }

}
