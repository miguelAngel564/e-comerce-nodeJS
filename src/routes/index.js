const { router } = require('../app');
const conversationRoutes = require("./conversations.routes")
const authRoutes = require("./auth.routes")

const routerApi = (app) => {
    app.use("/api/v1/auth", authRoutes);
    app.use("./api/v1/conversation", conversationRoutes);
    app.use("./api/v1/products/:id/users", productsRoutes);
    app.use("/api/v1/products", productsRoutes);
    app.use("/api/v1/productsIncar/car", productsInCarRoutes);
    app.use("/api/v1/productsinOrder", productInOrderRoutes);
};
module.exports = router