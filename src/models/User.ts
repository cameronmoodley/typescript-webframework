import { rootUrl } from './../helpers/urls';
import { Sync } from './Sync';
import { Eventing } from './Eventing';
import { iUserProps } from './../interfaces/iUser';
import { Attributes } from './Attributes';

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
}
