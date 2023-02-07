const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");
const error = require("./middlewares/error.middleware");
const db = require("./utils/database");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));



db.authenticate()
    .then(() => console.log("autenticaion exitosa"))
    .catch((error) => console.log(err))

db.sync({ alter: true })
    .then(() => console.log("conexion exitosa"))
    .catch((err) => console.log(err))

app.get("/", (req, res) => {
    res.status(200).json({
        status: "respuesta exitosa",
        description: "prueba esta api con swagger en el siguiente 'link'",
        link: process.env.HOST,
    })
})

app.use(error)

module.exports = app;
