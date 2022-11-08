const { Schema } = require("mongoose");
const MongoContainer = require("../../containers/mongo.container");

const collection = "products";
const productsSchema = new Schema({
  code: { type: Number },
  name: { type: String },
  description: { type: String },  
  price: { type: Number },
  imageUrl: { type: String },
  stock: { type: Number },
  timestamp: { type: Date, default: Date.now }
});

class ProductsMongoDao extends MongoContainer {
  constructor() {
    super(collection, productsSchema);
  }
}

module.exports = ProductsMongoDao;