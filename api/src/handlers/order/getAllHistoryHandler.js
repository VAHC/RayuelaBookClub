const getAllOrdersHistory = require('../../controllers/orders/getAllHistory')

const getAllHistoryHandler = async (req,res) => {
    try {
        const historyOrders = await getAllOrdersHistory()
        res.status(200).json(historyOrders)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getAllHistoryHandler