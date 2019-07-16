import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ChildActivationEnd, Router, ActivatedRoute } from '@angular/router';
import { ExtendedMap } from 'app/shared/extended-map';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { SplitScreenSideService } from '../split-screen.service';

const TAB_ROUTES = new ExtendedMap<string, {title: string, url: string}>([
	['About', { title: 'About', url: 'about' }]
	, ['Home', { title: 'Home', url: '' }]
	, ['Resume', { title: 'Resume', url: 'resume' }]
]);

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	public selected$ = new BehaviorSubject<string>('Home');

	tabs: ExtendedMap<string, {[attr: string]: string}>;

	constructor(
		private router: Router
		, private sideService: SplitScreenSideService
	) {
		this.tabs = TAB_ROUTES;

		this.sideService.activeSide$.subscribe(side => {
			this.tabs.get('Home').url = side;
		});

		this.router.events.pipe(
			filter(event => event instanceof ChildActivationEnd && !!event.snapshot.data.title)
			, map((event: ChildActivationEnd) => event.snapshot.data.title)
			, map(e => /web|industrial/.test(e) ? 'Home' : e)
			, tap(e => this.selected$.next(e))
		).subscribe();
	}

	ngOnInit() {
	}

	changeTab(event: MatTabChangeEvent) {
		this.router.navigateByUrl(TAB_ROUTES.get(event.tab.textLabel).url);
	}

}
