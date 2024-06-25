import {User} from './models/User';

const user = new User({ name: "lila", age: 25 });

user.events.on('change', () => {
    console.log('change!');
});

user.events.trigger('change');
