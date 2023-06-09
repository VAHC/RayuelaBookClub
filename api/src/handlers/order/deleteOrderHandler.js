const deleteOrder = require('../../controllers/orders/deleteOrder')

const deleteOrderHandler = async (req, res) => {
    
    const { id } = req.params

    try {
            const deletedOrder = await deleteOrder(id)
            res.status(200).send('The order has been deleted')
        }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = deleteOrderHandler;