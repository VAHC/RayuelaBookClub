const updateOrderByState = require('../../controllers/orders/updateOrderByState')

const updateOrderByStateHandler = async (req, res) => {

    const { id, state } = req.body;

    try {
        if (!state) {
            res.status(400).send('Please check that you have completed the required field')

        } else {
            const updatedOrder = await updateOrderByState(id, state)
            res.status(200).send('Congratulations! The order has been updated!')
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateOrderByStateHandler;