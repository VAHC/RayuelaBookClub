const { User } = require('../../db');
const { mailcancelsuscription } = require('../../handlers/mailing/mailing')
const { URL_Vercel_back } = require('../../../rutas')

const cancelSuscription = async (id) => {

    const user = await User.findByPk(id);

    if (!user) {
        throw Error(`No user has been found matching the id: ${id}`)

    } else {
        user.suscribed = false
        await user.save()

        await mailcancelsuscription("Rayuela Club de Lectura", `${URL_Vercel_back}`, `${user.firstName}`, `${user.email}`, 'Cancelación de Suscripción')
    }
}

module.exports = cancelSuscription;