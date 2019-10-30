const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
    let joe;

    beforeEach(async () => {
        joe = new User({name: 'Joe'});
        await joe.save();
    });

    it('model instance remove', async () => {
        await joe.remove();
        const fetchedUser = await User.findOne({name: 'Joe'});
        assert(fetchedUser === null);
    });

    it('class method remove', async () => {
        await User.remove({name: 'Joe'});
        const fetchedUser = await User.findOne({name: 'Joe'});
        assert(fetchedUser === null);
    });

    it('class method findAndRemove', async () => {
        await User.findOneAndRemove({ name: 'Joe'});
        const fetchedUser = await User.findOne({name: 'Joe'});
        assert(fetchedUser === null);
    });

    it('class method findByIdAndRemove', async () => {
        await User.findByIdAndRemove(joe._id);
        const fetchedUser = await User.findOne({name: 'Joe'});
        assert(fetchedUser === null);
    });
});