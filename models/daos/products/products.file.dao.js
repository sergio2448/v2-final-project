const FileContainer = require("../../containers/file.container");

const route = "../../../db/data/products.json";

class ProductsFileDao extends FileContainer {
  constructor() {
    super(route);
  }
}

module.exports = ProductsFileDao;