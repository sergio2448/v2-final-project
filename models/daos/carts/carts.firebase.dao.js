const FirebaseContainer = require("../../containers/firebase.container");

const collection = "carts";

class CartsFirebaseDao extends FirebaseContainer {
  constructor() {
    super(collection);
  }

  async getProductsCart(cartId) {

  }

  async addProductToCart(cartId, product) {

  }

  async deleteProductById(cartId, productId) {

  }
}

module.exports = CartsFirebaseDao;