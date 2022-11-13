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
      const products = cart[0].products;
      return products;
    } catch (error) {
      console.log(error.message);
    }
  }

  async addProductToCart(cartId, product) {
    try {
      const cart = await this.getById(cartId);
      if (cart) {
        await cart[0].products.push(product.id);
        await this.updateById(cartId, cart[0]);
        return cart;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteProductById(cartId, productId) {
    let settedId = parseInt(productId);
    try {
      const cart = await this.getById(cartId);
      if (cart) {
        let filteredProductsCart = cart[0].products.filter(
          (prod) => prod !== settedId
        );
        cart[0].products = filteredProductsCart;
        await this.updateById(cartId, cart[0]);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = CartsFileDao;
