import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISide } from 'app/split-screen/split-screen.types';

@Injectable({
	providedIn: 'root'
})
export class SideService {
	private _side = new BehaviorSubject<ISide>(undefined);
	side$ = this._side.asObservable();

	setSide(side: ISide) {
		this._side.next(side);
	}
	getSide() {
		return this._side.value;
	}
}
