const { Router } = require('express');
const { addProductsBuy } = require("../controllers/productsInOrder.controller");

const router = Router();

router.post('/', addProductsBuy);

module.exports = router;