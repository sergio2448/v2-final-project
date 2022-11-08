const { Router } = require("express");
const productsRoutes = require("./products/products.routes");

const router = Router();

router.use('/products', productsRoutes);

module.exports = router;