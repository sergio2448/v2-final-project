const { Schema } = require("mongoose");
const MongoContainer = require("../../containers/mongo.container");

const collection = "carts";
const cartsSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  products: [{ type: Schema.Types.ObjectId, ref: "products" }],
});

class CartsMongoDao extends MongoContainer {
  constructor() {
    super(collection, cartsSchema);
  }

  async getProductsCart(cartId) {
    try {
      const productsCart = this.model
        .find({ _id: cartId })
        .populate("products");
      return productsCart;
    } catch (error) {
      console.log(error.message);
    }
  }

  async addProductToCart(cartId, productId) {
    try {
      const updatedProductsToCart = await this.model.findByIdAndUpdate(cartId, {
        $push: {
          products: productId.products,
        },
      });
      return updatedProductsToCart;
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteProductById(cartId, productId) {
    try {
      const cart = await this.getById(cartId);
      if (cart) {
        let filteredProductsCart = await cart.products.filter(
          (prod) => prod._id.toString() !== productId
        );
        const updatedProductsToCart = await cart.updateOne({
          $set: {
            products: filteredProductsCart,
          },
        });
        return updatedProductsToCart;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = CartsMongoDao;
