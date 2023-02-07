const models = require("../models/car")

class CarService {
    static async carCreate(car){
        try {
            const result = await models.car.create(car)
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = CarService