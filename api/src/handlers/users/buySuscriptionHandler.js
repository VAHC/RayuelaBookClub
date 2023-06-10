const buySuscription = require('../../controllers/users/buySuscription');

const buySuscriptionHandler = async (req, res) => {

    const orderData = req.body;

    try {
        if (!orderData) {
            res.status(400).send('Error')
        } else {
            const newOrder = await buySuscription(orderData)
            res.status(200).send('Congratulations! Your order has been created!')
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = buySuscriptionHandler;