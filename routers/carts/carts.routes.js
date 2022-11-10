const { Router } = require("express");
const cartsController = require("../../controllers/carts.controller");

const router = Router();

router.get("/", cartsController.getCarts);
//router.get("/:id", cartsController.getCartById);
router.get("/:id/products", cartsController.getProductsOfCart);
router.post("/", cartsController.saveCart);
router.post("/:id/products", cartsController.saveProductToCart);
//router.put("/:id", cartsController.updateCart);
router.delete("/:id", cartsController.deleteCart);
router.delete("/:id/products/:id_prod", cartsController.deleteProductOfCart);

module.exports = router;