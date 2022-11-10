const fs = require("fs/promises");

class FileContainer {
  constructor(route) {
    this.route = route;
  }

  async getAll() {
    try {
      const content = await fs.readFile(this.route, "utf-8");
      const items = JSON.parse(content || "[]");
      return items;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }

  async getById(id) {
    let settedId = parseInt(id);
    try {
      const content = await this.getAll();
      const item = content.filter((item) => item.id === settedId);
      return item;
    } catch (error) {
      console.log(error.message);
    }
  }

  async save(item) {
    try {
      const items = await this.getAll();
      items.push(item);

      await fs.writeFile(this.route, JSON.stringify(items));
    } catch (error) {
      console.log(error.message);
    }
  }

  async updateById(id, item) {
    let settedId = parseInt(id);
    try {
      const items = await this.getAll();
      let indexItem = items.findIndex((item) => item.id === settedId);
      items[indexItem] = item;
      await fs.writeFile(this.route, JSON.stringify(items));
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteById(id) {
    let settedId = parseInt(id);
    try {
      const items = await this.getAll();
      const filteredItems = items.filter((item) => item.id !== settedId);
      await fs.writeFile(this.route, JSON.stringify(filteredItems))
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = FileContainer;