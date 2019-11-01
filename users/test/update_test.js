const User = require('../src/user');
const assert = require('assert');

describe('Updating a user', () => {
    let joe;

    beforeEach(async () => {
        joe = new User({name: 'Joe'});
        await joe.save();
    });

    it('instance type using set n save',async () => {
        joe.set('name', 'Alex');
        await joe.save();
        const users = await User.find({});
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
    });
});