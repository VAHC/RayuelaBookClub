const { User} = require('../../db');

const getAllUsers = async () => {

    const Users = await User.findAll()
    return Users;
}

module.exports = getAllUsers