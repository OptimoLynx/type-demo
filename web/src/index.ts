import {User} from './models/User';

const user = new User({ id: 1, name: 'new name', age: 28 });

// console.log(user.get('name'));

user.on('save', () => {
    console.log(user);
});

// user.set({ name: 'New name'});
//user.fetch();

user.save();

