import {User} from './models/User';

const user = User.buildUser({ id: 1 });

// console.log(user.get('name'));

user.on('save', () => {
    console.log(user);
});

// user.set({ name: 'New name'});
user.fetch();

// user.save();
