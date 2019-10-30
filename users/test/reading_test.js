const User = require('../src/user');
const assert = require('assert');

describe('Reading users out of the database', () => {
    let joe;

    beforeEach(async () => {
        joe = new User({name: 'Joe'});
        await joe.save();
    });

    it('finds all users with a name of Joe', async () => {
        const allUser = await User.find({name: 'Joe'});
        assert(allUser[0]._id.toString() === joe._id.toString());
    });
});