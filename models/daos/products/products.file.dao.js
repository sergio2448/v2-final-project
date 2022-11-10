const FileContainer = require("../../containers/file.container");
const path = require("path");

const route = path.resolve(__dirname, "../../../db/data/products.file.json");

class ProductsFileDao extends FileContainer {
  constructor() {
    super(route);
  }
}

module.exports = ProductsFileDao;