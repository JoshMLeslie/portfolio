import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ChildActivationEnd, } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Subject, Observable } from 'rxjs';
import { filter, take, map, tap } from 'rxjs/operators';
import { ExtendedMap } from 'app/shared/extended-map';

const TAB_ROUTES = new ExtendedMap<string, {[attr: string]: string}>([
	['Web Design', { title: 'Web Design', url: 'web' }]
	, ['Industrial Design', { title: 'Industrial Design', url: 'industrial' }]
	, ['About', { title: 'About', url: 'about' }]
	, ['Resume', { title: 'Resume', url: 'resume' }]
]);


@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	public selected$: Observable<string>;
	public url$: Observable<string>;

	tabs: ExtendedMap<string, {[attr: string]: string}>;

	constructor(private router: Router) {
		this.selected$ = this.router.events.pipe(
			filter(event => event instanceof ChildActivationEnd)
			, map((event: ChildActivationEnd) => event.snapshot.data.title)
			, tap(title => this.tabs = TAB_ROUTES.filter(tabs => tabs.title !== title))
		);
	}

	ngOnInit() {
	}

	changeTab(event: MatTabChangeEvent) {
		console.log(event)
		this.router.navigateByUrl(TAB_ROUTES.get(event.tab.textLabel));
	}

}
