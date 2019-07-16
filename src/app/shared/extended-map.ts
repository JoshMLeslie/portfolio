export class ExtendedMap<T, X> extends Map {
	constructor(init?: [T, X][]) {
		super();
		// Map constructor refuses to take an input. So.
		// tslint:disable-next-line:forin
		for (const entry of init) {
			this.set(entry[0], entry[1]);
		}
	}

	filter(check: (value: any, key: any) => boolean) {
		// I just really wanted this.
		const temp = Object.assign(this);
		temp.forEach((value: any, key: any) => {
			check(value, key) ? temp.set(key, value) : temp.delete(key);
		});

		return temp;
	}
}
