import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { TAB_ROUTES } from './nav-bar.config';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	tabs: any[];
	selectedIndex: number;

	constructor(
		private active: ActivatedRoute
		, private router: Router
	) {
		console.log(this.active.snapshot.data)
	}

	ngOnInit() {
		const url = this.router.routerState.snapshot.url;
		this.tabs = TAB_ROUTES[url] || TAB_ROUTES.default;
		this.selectedIndex = this.tabs.findIndex(set => set.url === url);
	}

	changeTab(event: MatTabChangeEvent) {
		const label = event.tab.textLabel;
		const destination = this.tabs.find(route => route.title === label);
		this.router.navigateByUrl(destination.url);
	}

}
