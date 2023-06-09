const { User } = require('../../db');

const cancelSuscription = async (id) => {

    const user = await User.findByPk(id);

    if (!user) {
        throw Error(`No user has been found matching the id: ${id}`)

    } else {
        user.suscribed = false

        await user.save()
    }
}

module.exports = cancelSuscription;