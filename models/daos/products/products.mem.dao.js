const MemoryContainer = require("../../containers/file.container");

const resource = "products";

class ProductsMemDao extends MemoryContainer {
  constructor() {
    super(resource);
  }
}

module.exports = ProductsMemDao;
