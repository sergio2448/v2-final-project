const { v4: uuid } = require("uuid");
const HTTP_STATUS = require("../../constants/api.constants");
const { HttpError } = require("../../utils/api.utils");

class MemoryContainer {
  constructor(resource) {
    this.items = [];
    this.resource = resource;
  }

  getAll() {
    return [...this.items];
  }

  getById(id) {
    let settedId = parseInt(id);
    const item = this.items.find((item) => item.id === settedId);
    if (!item) {
      const message = `${this.resource} with id ${id} does not exist in our records`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
    }
    return item;
  }

  save(item) {
    const newItem = {
      id: uuid(),
      ...item,
    };
    this.items.push(newItem);
    return newItem;
  }

  updateById(id, item) {
    let settedId = parseInt(id);
    const index = this.items.findIndex((item) => item.id === settedId);
    if (index < 0) {
      const message = `${this.resource} with id ${id} does not exist in our records`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
    }
    const updatedItem = {
      id,
      ...item,
    };
    this.items[index] = updatedItem;
    return updatedItem;
  }

  deleteById(id) {
    let settedId = parseInt(id);
    const index = this.items.findIndex((item) => item.id === settedId);
    if (index < 0) {
      const message = `${this.resource} with id ${id} does not exist in our records`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
    }
    return this.items.splice(index, 1);
  }
}

module.exports = MemoryContainer;