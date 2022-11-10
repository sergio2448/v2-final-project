const MemContainer = require("../../containers/file.container");

const resource = "carts";

class CartsMemDao extends MemContainer {
  constructor() {
    super(resource);
  }

  getProductsCart(cartId) {
    try {
      const cart = this.getById(cartId);
      const products = cart[0].product;
      return products;
    } catch (error) {
      console.log(error.message);
    }
  }

  addProductToCart(cartId, product) {
    try {
      const cart = this.getById(cartId);
      if (cart) {
        cart[0].product.push(product);
        return cart;
      }
      this.updateById(cartId, cart);
    } catch (error) {
      console.log(error.message);
    }
  }

  deleteProductById(cartId, productId) {
    try {
      const cart = this.getById(cartId);
      if (cart) {
        let filteredProductsCart = cart.product.filter(
          (prod) => prod.id !== productId
        );
        cart.product = filteredProductsCart;
      }
      this.updateById(cartId, cart);
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = CartsMemDao;
