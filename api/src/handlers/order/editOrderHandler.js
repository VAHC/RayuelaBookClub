const editOrder = require('../../controllers/orders/editOrder')

const editOrderHandler = async (req, res) => {

    const {id} = req.params
    const { date, state, quantity, price_total, street_and_number, floor_and_department, city, CP, province } = req.body;

    try {
        if (!date || !state || !quantity || !price_total || !street_and_number || !floor_and_department || !city || !CP ||!province) {
            res.status(400).send('Please check that you have completed all the required fields')

        } else {
            const updatedOrder = await editOrder(id, date, state, quantity, price_total, street_and_number, floor_and_department, city, CP, province)
            res.status(200).send('Congratulations! The order has been updated!')
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = editOrderHandler;