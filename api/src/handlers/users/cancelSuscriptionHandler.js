const cancelSuscription = require('../../controllers/users/cancelSuscription')

const cancelSuscriptionHandler = async (req, res) => {

    const { id } = req.params;

    try {

        const cancel = await cancelSuscription(id)
        res.status(200).send('The suscription has been canceled')

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = cancelSuscriptionHandler;