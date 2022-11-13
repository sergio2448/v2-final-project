const FirebaseContainer = require("../../containers/firebase.container");

const collection = "carts";

class CartsFirebaseDao extends FirebaseContainer {
  constructor() {
    super(collection);
  }

  async getProductsCart(cartId) {
    try {
      const cart = await this.getById(cartId);
      const products = cart.products;
      return products;
    } catch (error) {
      console.log(error.message);
    }
  }

  async addProductToCart(cartId, product) {
    try {
      const cart = await this.getById(cartId);
      await cart.products.push(product.id);
      this.updateById(cartId, cart);
      return cart;
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteProductById(cartId, productId) {
    try {
      const cart = await this.getById(cartId);
      if (cart) {
        const filteredProductsCart = await cart.products.filter(
          (product) => product !== productId
        );
        cart.products = filteredProductsCart;
        this.updateById(cartId, cart);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = CartsFirebaseDao;
