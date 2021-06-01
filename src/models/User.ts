import { Collection } from './Collection';
import { Sync } from './Sync';
import { rootUrl } from './../helpers/urls';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { Model } from './Model';
import { iUserProps } from './../interfaces/iUser';

export class User extends Model<iUserProps> {
	static buildUser(attrs: iUserProps): User {
		return new User(
			new Attributes<iUserProps>(attrs),
			new Eventing(),
			new Sync<iUserProps>(rootUrl)
		);
	}

	static buildUserCollection(): Collection<User, iUserProps> {
		return new Collection<User, iUserProps>(rootUrl, (json: iUserProps) =>
			User.buildUser(json)
		);
	}

	setRandomAge(): void {
		const age = Math.round(Math.random() * 100);
		this.set({ age });
	}
}
