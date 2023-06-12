const createOrder = require('../../controllers/orders/createOrder')

const createOrderHandler = async (req, res) => {

    const orderData = req.body;
    console.log(orderData);
    try {
        if (!orderData) {
            res.status(400).send('Error')
        } else {
            const newOrder = await createOrder(orderData)
            res.status(200).send('Congratulations! Your order has been created!')
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = createOrderHandler;