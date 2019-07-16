import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export type ISide = 'web' | 'industrial';
export type IFocus = 'none' | 'left' | 'right' | 'bumpLeft' | 'bumpRight' | 'top' | 'bottom' | 'bumpTop' | 'bumpBottom';
export const FocusMain = {left: true, right: true, top: true, bottom: true};

@Injectable({
	providedIn: 'root'
})
export class SplitScreenSideService {
	activeSide$ = new BehaviorSubject<ISide>(null);

	get side(): ISide {
		return this.activeSide$.value;
	}
	set side(name: ISide) {
		this.activeSide$.next(name);
	}
}
