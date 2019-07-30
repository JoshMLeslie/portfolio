/** **Only** because you can't *really* extend the Map object. */
export class SuperMap<T, X> {
	// tslint:disable:variable-name
	private _dict: {[attr: string]: number};	// _key: value_index	// for O(n) lookup by key
	private _list: X[] = [];									// [value]	 					// for predictable iteration
	// tslint:enable:variable-name

	constructor(data?: [T, X][]) {

	}

	get(key: string) {
		return this._list[this._dict[key]];
	}
	getIndex(index: string) {
		return this._list[index];
	}

	add(k: any, v?: X) {
		if ( !(k instanceof SuperMap) && !v) {
			throw Error('Value for a key cannot be undefined');
		} else if (k instanceof SuperMap) {
			this.combine(k);
		} else {
			if (k in this._dict) {
				this.bumpIndices(k);
			}

			this._list.push(v);
			this._dict[k] = this._list.length;
		}

		return this;
	}

	update(k: any, v: X) {
		this._list[this._dict[k]] = v;

		return this;
	}

	// todo
	// move(k: any, newI: number) {

	// 	this.bumpIndices(k);

	// }

	/** Mutates the leading SuperMap with a provided SuperMap  */
	combine(m: SuperMap<T, X>): SuperMap<T, X> {
		this._list = this._list.concat(m._list);
		this._dict = Object.assign(this._dict, m._dict);

		return this;
	}

	delete(key: T | T[]) {
		const _delete = (_key) => { // tslint:disable-line:variable-name
			delete this._dict[_key];
			this._list = this._list.filter(k => _key !== k);
		};
		if (key instanceof Array) {
			key.forEach(k => _delete(k));
		} else {
			_delete(key);
		}
	}

	forEach(callback: (value: X, index: number) => void) {
		for (let i = 0; i < this._list.length; i++) {
			const v = this._list[i];
			callback(v, i);
		}
	}

	private bumpIndices(k: string, by: number = 1) {
		const oldI = this._dict[k];
		this._list.splice(oldI, 1);

		for (const v in this._dict) {
			const i = this._dict[v];
			if (i > oldI) {
				this._dict[v] = i - by;
			}
		}
	}

	// todo;
	// filter(callback: (val: T, index?: number) => boolean) {
	// 	// this._list.filter(o => o === e)

	// 	this.forEach((value: any, i?: number) => {
	// 		callback(value, i) ? this.add(value) : this.delete(key);
	// 	});

	// 	return this;
	// }

}
