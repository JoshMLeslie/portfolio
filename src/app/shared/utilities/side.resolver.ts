import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ISide } from 'app/split-screen/split-screen.types';
import { Observable } from 'rxjs';
import { SideService } from './side.service';

@Injectable({
	providedIn: 'root'
})
export class SideResolver implements Resolve<any> {

	constructor(private sideService: SideService) { }

	resolve(
		route: ActivatedRouteSnapshot,
		{ url }: RouterStateSnapshot
	): Observable<any> | any {
		let side: ISide;

		if (/web/.test(url)) {
			side = 'web';
		} else if (/industrial/.test(url)) {
			side = 'industrial';
		}

		if (!side && url.length > 1) {
			side = 'web';
		}

		this.sideService.url = url;
		this.sideService.side = side;
	}
}
