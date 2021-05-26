export class Attributes<T> {
	constructor(private data: T) {}

	// K allows us to type each of the object values.
	// K is in essence a constraint
	// K will only ever be one of the keys of T name, age, id
	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
	};

	set = (update: T): void => {
		Object.assign(this.data, update);
	};

	getAll = (): T => {
		return this.data;
	};
}
