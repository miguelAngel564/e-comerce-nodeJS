const models = require("../models/index")

const { product, users } = models;

class ProducServices {
    static async getAll() {
        try {
           const result = await product.findAll({
            where: {
                availableQty: {
                    [Op.gt]: 0,
                }
            },
            include: {
                model: users,
                as: "user",
                attributes: ["username"],
            },
           })
                
            return result;
        } catch (error) {
            throw error;
        }
    }
}