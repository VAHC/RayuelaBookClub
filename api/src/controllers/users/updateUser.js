const { User } = require('../../db');

const updateUser = async (id, name, email, password, phone, profile) => {

    const userToUpdate = await User.findByPk(id);

    if (!userToUpdate) {
        throw Error(`No user has been found matching the id: ${id}`)

    } else {
        userToUpdate.name = name
        userToUpdate.email = email
        userToUpdate.password = password
        userToUpdate.phone = phone
        userToUpdate.profile = profile

        await userToUpdate.save()
    }
}

module.exports = updateUser;