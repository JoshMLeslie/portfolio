import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISide, IFocus, FocusMain } from 'app/split-screen/split-screen.types';
import { DeviceService } from './device.service';

@Injectable({
	providedIn: 'root'
})
export class SideService {
	private _side = new BehaviorSubject<ISide>(undefined);
	side$ = this._side.asObservable();

	private _url = new BehaviorSubject<string>(undefined);
	url$ = this._url.asObservable();

	constructor(private deviceService: DeviceService) {}

	get side(): ISide {
		return this._side.value;
	}
	set side(side: ISide) {
		this._side.next(side);
	}

	setSideByFocus(focus: FocusMain) {
		this._side.next(this.focusToSide(focus));
	}

	get url(): string {
		return '/' + this._url.value;
	}
	set url(url: string) {
		this._url.next(url || this.side);
	}

	get focus(): IFocus {
		let focus: IFocus = 'none';
		if (this.side) {
			if (this.deviceService.isMobile) {
				focus = this.side === 'web' ? 'top' : 'bottom';
			} else {
				focus = this.side === 'web' ? 'left' : 'right';
			}
		}

		return focus;
	}

	sideToFocus(side: ISide) {

	}

	focusToSide(focus: FocusMain): ISide {
		return {
			left: 'web',
			top: 'web',
			right: 'industrial',
			bottom: 'industrial'
		}[focus] as ISide;
	}
}
