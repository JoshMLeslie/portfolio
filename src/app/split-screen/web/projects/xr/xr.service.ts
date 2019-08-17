import { Injectable } from '@angular/core';
import { LogService, WindowService } from 'app/shared';
import { forkJoin, from, Observable } from 'rxjs';
import { ISession, ISessionRaw, NAVIGATOR_XR_MODES, XRSession } from './xr';

@Injectable({
	providedIn: 'root'
})
export class XRService {

	type: NAVIGATOR_XR_MODES = NAVIGATOR_XR_MODES.INLINE;

	constructor(
		private windowService: WindowService,
		private log: LogService
	) { }

	public setSessionType(): Observable<ISession[]> {
		const modeTests: Observable<ISession>[] = [];
		for (const mode in NAVIGATOR_XR_MODES) {
			modeTests.push(this.getMode(NAVIGATOR_XR_MODES[mode]));
		}

		return forkJoin(modeTests);
	}

	public startSession(type: NAVIGATOR_XR_MODES): Observable<XRSession> {
		this.type = type;
		// tslint:disable-next-line:no-string-literal
		return from(this.windowService.navigator['xr'].requestSession(type) as Promise<XRSession>);
	}

	private getMode(mode: string): Observable<ISession> {
		return new Observable(o => {
			const { next, error, complete } = o;

			// tslint:disable-next-line:no-string-literal
			this.windowService.navigator['xr'].supportsSessionMode(mode)
			.then((e: ISessionRaw) => {
				next({
					state: e.__zone_symbol__state
					, value: e.__zone_symbol__value
				});
				complete();
			})
			.catch((e: any) => {
				this.log.error(e);
				error({
					state: false
					, value: [false]
				});
			});
		});
	}
}
