import {User} from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'john', age: 21 });

user.save();
