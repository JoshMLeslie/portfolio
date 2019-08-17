import { Injectable } from '@angular/core';

enum LOG_TYPE { DEBUG , INFO , ERROR , LOG , WARN }

@Injectable({
	providedIn: 'root'
})
export class LogService {

	constructor() { }

	output(input: any) {
		this.default({log: LOG_TYPE.LOG, input});
	}

	error(input: any) {
		this.default({log: LOG_TYPE.ERROR, input});
	}

	default({log, input}: {log: LOG_TYPE, input: any}) {
		switch (typeof input) {
			case 'object':
				console[log](JSON.parse(input));
				break;
			default:
				console[log](input);
		}
	}
}
