const FileContainer = require("../../containers/file.container");
const path = require("path");

const route = path.resolve(__dirname, "../../../db/data/carts.file.json");

class CartsFileDao extends FileContainer {
  constructor() {
    super(route);
  }

  async getProductsCart(cartId) {
    try {
      const cart = await this.getById(cartId);
      const products = cart[0].product;
      return products;
    } catch (error) {
      console.log(error.message);
    }
  }

  async addProductToCart(cartId, product) {
    try {
      const cart = await this.getById(cartId);
      if (cart) {
        cart[0].product.push(product);
        return cart;
      }
      await this.updateById(cartId, cart);
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteProductById(cartId, productId) {
    try {
      const cart = await this.getById(cartId);
      if (cart) {
        let filteredProductsCart = cart.product.filter(
          (prod) => prod.id !== productId
        );
        cart.product = filteredProductsCart;
      }
      await this.updateById(cartId, cart);
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = CartsFileDao;
