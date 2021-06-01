import { UserShow } from './UserShow';
import { UserForm } from './UserForm';
import { iUserProps } from './../interfaces/iUser';
import { User } from './../models/User';
import { View } from './View';

export class UserEdit extends View<User, iUserProps> {
	regionsMap(): { [key: string]: string } {
		return {
			userShow: '.user-show',
			userForm: '.user-form',
		};
	}

	onRender(): void {
		new UserShow(this.regions.userShow, this.model).render();
		new UserForm(this.regions.userForm, this.model).render();
	}

	template(): string {
		return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
	}
}
