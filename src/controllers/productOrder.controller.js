const productsInOrderSErvice = require("../services/productinOrder.services");

const addProductsBuy = async (req, res) => {
    try {
        const newOrder = req.body;
        const result = await productsInOrderSErvice.create(newOrder);
        res.json({message: "done Order", data: result})
    }   catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = { addProductsBuy }