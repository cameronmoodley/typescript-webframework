import { UserShow } from './UserShow';
import { iUserProps } from './../interfaces/iUser';
import { User } from './../models/User';
import { CollectionView } from './CollectionView';

export class UserList extends CollectionView<User, iUserProps> {
	renderItem(model: User, itemParent: Element): void {
		new UserShow(itemParent, model).render();
	}
}
