const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
  apis: [
    "./src/routes/auth.routes.js",
     "./src/models/users",
     "./src/routes/product.routes.js",
     "./src/models/product.js",
     "./src/routes/cart.routes.js",
     "./src/models/cart.js",
     "./src/routes/order.routes.js",
     "src/models/order.js"
    
    ],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Clon de chat en node js",
      version: "0.0.9",
      description: "API para aplicación de mensajeria",
    },
  },
};

// vamos a generar una especificación en json para nuestra docu
const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  // generar la ruta donde se mostrará la documentación
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader({ "Content-Type": "application/json" });
    res.send(swaggerSpec);
  });

  console.log(
    `La documentación esta disponible en ${process.env.URL}:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;
