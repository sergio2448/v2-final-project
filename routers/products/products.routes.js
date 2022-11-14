const { Router } = require("express");
const productsController = require("../../controllers/products.controller");
const checkAuthentication = require("../../middlewares/auth.middleware");

const router = Router();

router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProductById);
router.post("/", checkAuthentication, productsController.saveProduct);
router.put("/:id", checkAuthentication, productsController.updateProduct);
router.delete("/:id", checkAuthentication, productsController.deleteProduct);

module.exports = router;