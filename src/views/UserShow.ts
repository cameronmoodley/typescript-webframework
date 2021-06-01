import { iUserProps } from './../interfaces/iUser';
import { User } from './../models/User';
import { View } from './View';

export class UserShow extends View<User, iUserProps> {
	template(): string {
		return `
      <div>
        <h1>User Form</h1>
        <div>Username: ${this.model.get('name')}</div>
        <div>Users Age: ${this.model.get('age')}</div>
      </div>
    `;
	}
}
