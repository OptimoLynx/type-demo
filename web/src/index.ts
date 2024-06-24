import { User } from './models/User';

const user = new User({ name: 'dev', age: 20 });

// user.set({ age: 34 });

// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => {
    console.log("Change #1")
});
user.on('change', () => {
    console.log("Change #2")
});
user.on('save', () => {
    console.log("Save was triggered")
});

// console.log(user);
user.trigger('save');