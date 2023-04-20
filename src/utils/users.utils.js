const bcrypty = require('bcrypt');

const User = require('../models/user.model');

const createUser = async () => {
    const users = await User.find();

    if ( users.length == 0 ) {
        const encyptedPassword = await bcrypty.hash(process.env.USERPASSWORD, 10);

        const newUser = new User({ 
            username: 'admin',
            name: 'Admin',
            password: encyptedPassword
         });
        
        await newUser.save();
    }
};

module.exports = { createUser };