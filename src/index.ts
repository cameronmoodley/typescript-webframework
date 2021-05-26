import { User } from './models/User';

const user = new User({ name: 'mini me', age: 12 });

user.on('change', () => {
	console.log('User was changed');
});

user.set({ name: 'New Name' });
