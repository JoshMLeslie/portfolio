import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ChildActivationEnd, Router, ActivatedRoute } from '@angular/router';
import { SuperMap } from 'app/shared/extended-map';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { SplitScreenSideService } from '../split-screen.service';

const TAB_ROUTES = new SuperMap<string, {title: string, url: string}>([
	['About', { title: 'About', url: 'about' }]
	, ['Resume', { title: 'Resume', url: 'resume' }]
]);

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	// public selected$ = new BehaviorSubject<string>('Home');

	tabs: SuperMap<string, {[attr: string]: string}>;

	constructor(
		private router: Router
		, private sideService: SplitScreenSideService
	) {
		this.tabs = TAB_ROUTES;

		this.router.events.pipe(
			filter(e => e instanceof ChildActivationEnd && !!e.snapshot.data.title)
			, tap((e: ChildActivationEnd) => e.snapshot.data.routes ? this.tabs.add(e.snapshot.data.routes) : null)
			// , tap((e: ChildActivationEnd) => this.selected$.next(e.snapshot.data.title))
		).subscribe();
	}

	ngOnInit() {
	}

	changeTab(event: MatTabChangeEvent) {
		this.router.navigateByUrl(TAB_ROUTES.get(event.tab.textLabel).url);
	}

}
