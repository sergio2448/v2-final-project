const MemContainer = require("../../containers/file.container");

const resource = "carts";

class CartsMemDao extends MemContainer {
  constructor() {
    super(resource);
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
        cart[0].products.push(product.id);
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

module.exports = CartsMemDao;
