import { rootUrl } from './../helpers/urls';
import { Sync } from './Sync';
import { Eventing } from './Eventing';
import { iUserProps } from './../interfaces/iUser';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

export class User {
	public events: Eventing = new Eventing();
	public sync: Sync<iUserProps> = new Sync<iUserProps>(rootUrl);
	public attributes: Attributes<iUserProps>;

	constructor(attr: iUserProps) {
		this.attributes = new Attributes<iUserProps>(attr);
	}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	get get() {
		return this.attributes.get;
	}

	set(update: iUserProps): void {
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
				this.trigger('error');
			});
	}
}
