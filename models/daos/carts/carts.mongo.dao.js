const { Schema } = require("mongoose");
const MongoContainer = require("../../containers/mongo.container");

const collection = "carts";
const cartsSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  products: [{ type: String }],
  products1: [{ type: Schema.Types.ObjectId, ref: "products" }],
  /* {
    productId: { type: ObjectId },
    code: { type: Number },
    timestamp: { type: Date, default: Date.now },
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: Number },
    stock: { type: Number }
  } */
});

class CartsMongoDao extends MongoContainer {
  constructor() {
    super(collection, cartsSchema);
  }

  async getProductsCart(cartId) {
    try {
      const products = this.model.getById(cartId).products.map(prod => {
        return prod;
      })
      return products;
    } catch (error) {
      console.log(error.message);
    }
  }

  async addProductToCart(cartId, productId) {
    try {
      this.model.updateOne({ _id: cartId }, {
        $push: {
          products: [productId]
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  async deleteProductById(cartId, productId) {
    try {
      const cart = await this.getById(cartId);
      if (cart) {
        let filteredProductsCart = await cart.products.filter(prod => prod.id !== productId);
        cart.products = filteredProductsCart;
        this.updateById(cartId, cart)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = CartsMongoDao;