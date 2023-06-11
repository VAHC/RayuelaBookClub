const changeStatus = require('../../controllers/orders/changeStatus')

const changeStatusHandler = async (req, res) => {

    const { quantity, price } = req.body;

    try {
        const Status = await changeStatus(quantity, price)
        res.status(200).send('Congratulations! The order status has been updated!')

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = changeStatusHandler;