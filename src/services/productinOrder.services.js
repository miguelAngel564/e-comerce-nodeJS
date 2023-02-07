const { productInorder } = require("../models");

class productsInOrderSErvice {
    static async create(newOrder) {
        try {
            const result = productsInOrder.create(newOrder)
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = productsInOrderSErvice;