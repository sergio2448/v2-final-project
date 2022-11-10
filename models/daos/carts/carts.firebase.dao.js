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
      cart = await this.getById(cartId);
      await cart.products.push(product);
      if (cart) {
        const data = await this.collection
          .doc(id)
          .update({ products: cart.products });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteProductById(cartId, productId) {
    try {
      const cart = await this.getById(cartId);
      if (cart) {
        let filteredProductsCart = await cart.products.filter(
          (product) => product.id !== productId
        );
        cart.product = filteredProductsCart;
        this.updateById(cartId, cart);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = CartsFirebaseDao;
