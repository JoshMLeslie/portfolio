export class SuperMap<T extends string, X> {
	private _hash: {[attr: string]: any};
	private _list: T[] = [];
	private _index: {[key: string]: number};

	constructor(data?: [T, X][]) {

	}

	get(key?: T) {
		return key ? this._hash[key] : this._hash;
	}

	add(k: any, v?: X) {
		if ( !(k instanceof SuperMap) && !v) {
			throw Error('Must provide a value for the key');
		} else if (k instanceof SuperMap) {

		} else {
			k = this.stringify(k);

			this.checkList(k);

			this.setIndex(k);
			this._list.push(k);
			this._hash[k] = v;
		}
	}

	combine(m: SuperMap<T, X>): SuperMap<T, X> {
		this._hash = Object.assign(this._hash, m._hash);
		this._list = this._list.concat(m._list);
		this._index = Object.assign(this._index, m._index);

		this.ensure();

		return this;
	}

	delete(key: T | T[]) {
		const _delete = (_key) => {
			delete this._hash[_key];
			this._list = this._list.filter(k => _key !== k);
		};
		if (key instanceof Array) {
			key.forEach(k => _delete(k));
		} else {
			_delete(key);
		}
	}

	forEach(callback: (value: T, index: number) => void) {
		for (let i = 0; i < this._list.length; i++) {
			const k = this._list[i];
			const v = this._hash[k];
			callback(v, i);
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

	private ensure() {
		for (const val in this._list) {
			const i = this._index[val];

			if (!i) {
				
			}

		}

	}

	private parseAdd(k: any): void {
		if (k instanceof SuperMap) {

		} else {

		}
	}

	private checkList(k: string) {
		// if a key is already in the list, remove it to update it
		const listIndex = this._index[k];
		if (this._list[listIndex] === k) {
			this._list.splice(listIndex, 1);
		}
	}
	
	private setIndex(key: string, index?: number) {
		this._index[key] = index || this._list.length - 1;
	}

	private stringify(k: any) {
		return typeof k === 'string' ? k : JSON.stringify(k);
	}
}
