import { HasId } from './../interfaces/iHasId';
import { AxiosResponse } from 'axios';
import { iSync } from './../interfaces/iSync';
import { iEvents } from './../interfaces/iEvents';
import { iModelAttributes } from './../interfaces/iModelAttributes';

export class Model<T extends HasId> {
	constructor(
		private attributes: iModelAttributes<T>,
		private events: iEvents,
		private sync: iSync<T>
	) {}

	// get on() {
	// 	return this.events.on;
	// }

	// get trigger() {
	// 	return this.events.trigger;
	// }

	// get get() {
	// 	return this.attributes.get;
	// }

	// Shorter way of writing the code above
	on = this.events.on;
	trigger = this.events.trigger;
	get = this.attributes.get;

	set(update: T): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}

	fetch(): void {
		const id = this.get('id');
		if (typeof id !== 'number') {
			throw new Error('Cannot Fetch without id');
		}
		this.sync.fetch(id).then((response: AxiosResponse): void => {
			this.set(response.data);
		});
	}

	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then((response: AxiosResponse): void => {
				this.trigger('save');
			})
			.catch((err) => {
				this.trigger(`${err}`);
			});
	}
}
