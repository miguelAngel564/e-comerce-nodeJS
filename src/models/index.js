const initModels = require("./init-models");
const db = require("../utils/database");

const models = initModels(db);

const { users, messages, participants, conversations } = models;

// module.exports = {
//   users,
//   messages,
//   participants,
//   conversations,
// };

const data = {
  products: [1, 11, 11123],
  user_id: 564234,
}

data.products.forEach(
  async (product) => {
    await productInorder.create({product_id: product, user_id: data.user_id})
  }
);

module.exports = models
