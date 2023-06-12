const shippedStatus = require('../../controllers/orders/shippedStatus')

const shippedStatusHandler = async (req, res) => {

    const { id } = req.body;

    try {
        const shipped = await shippedStatus(id)
        res.status(200).send('Congratulations! The order status has been updated!')

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = shippedStatusHandler;