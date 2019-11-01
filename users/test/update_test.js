const User = require('../src/user');
const assert = require('assert');

describe('Updating a user', () => {
    let joe;

    beforeEach(async () => {
        joe = new User({name: 'Joe'});
        await joe.save();
    });

    async function assertName() {
        const users = await User.find({});
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
    }

    it('instance type using set n save',async () => {
        joe.set('name', 'Alex');
        await joe.save();
        await assertName();
    });

    it('A model instance can update', async () => {
        await joe.update({name: 'Alex'});
        await assertName();
    });
});