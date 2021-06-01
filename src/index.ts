import { UserList } from './views/UserList';
import { User } from './models/User';
import { iUserProps } from './interfaces/iUser';
import { Collection } from './models/Collection';

const users = new Collection(
	'http://localhost:3000/users',
	(json: iUserProps) => {
		return User.buildUser(json);
	}
);

users.on('change', () => {
	const root = document.querySelector('#root');
	if (root) {
		new UserList(root, users).render();
	}
});

users.fetch();
