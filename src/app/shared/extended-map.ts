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
		this.forEach((value: any, key: any) => {
			check(value, key) ? this.set(key, value) : this.delete(key);
		});

		return this;
	}
}
