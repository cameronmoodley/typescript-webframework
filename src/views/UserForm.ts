import { iUserProps } from './../interfaces/iUser';
import { User } from './../models/User';
import { View } from './View';

export class UserForm extends View<User, iUserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick,
			'click:.save-model': this.onSaveUser,
		};
	}

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	onSetNameClick = (): void => {
		const elm = this.parent.querySelector('input');
		elm && this.model.set({ name: elm.value });
	};

	onSaveUser = (): void => {
		this.model.save();
	};

	template(): string {
		return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
				<button class="set-name">Change Name</button>
				<button class="set-age">Set Random Age</button>
				<button class="save-model">Save User</button>
      </div>
    `;
	}
}
