const envConfig = require("../../config");

let ProductsDao;
let CartsDao;

switch (envConfig.DATASOURCE) {
  case "file":
    ProductsDao = require("./products/products.file.dao");
    CartsDao = require("./carts/carts.file.dao");
    break;
  case "firebase":
    ProductsDao = require("./products/products.firebase.dao");
    CartsDao = require("./carts/carts.firebase.dao");
    break;
  case "mem":
    ProductsDao = require("./products/products.mem.dao");
    CartsDao = require("./carts/carts.mem.dao");
    break;
  case "mongo":
    ProductsDao = require("./products/products.mongo.dao");
    CartsDao = require("./carts/carts.mongo.dao");
    break;
  default:
    throw new Error("Invalid Datasource");
}

module.exports = {
  ProductsDao,
  CartsDao,
};
