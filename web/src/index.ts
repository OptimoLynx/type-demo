import { User } from './models/User';

const user = new User({ name: 'dev', age: 20 });

user.set({ age: 34 });

console.log(user.get('name'));
console.log(user.get('age'));