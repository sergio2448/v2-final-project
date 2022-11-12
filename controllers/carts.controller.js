const HTTP_STATUS = require("../constants/api.constants");
const { CartsDao } = require("../models/daos/app.daos");
const { successResponse } = require("../utils/api.utils");

const cartsDao = new CartsDao();

class CartsController {
  async getCarts(req, res, next) {
    try {
      const carts = await cartsDao.getAll();
      const response = successResponse(carts);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getCartById(req, res, next) {
    const { id } = req.params;
    try {
      const cart = await cartsDao.getById(id);
      const response = successResponse(cart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getProductsOfCart(req, res, next) {
    const { id } = req.params;
    try {
      const cart = await cartsDao.getProductsCart(id);
      const response = successResponse(cart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async saveCart(req, res, next) {
    try {
      const newCart = await cartsDao.save(req.body);
      const response = successResponse(newCart);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async saveProductToCart(req, res, next) {
    const { id } = req.params;
    try {
      const addNewProductToCart = await cartsDao.addProductToCart(id, req.body);
      const response = successResponse(addNewProductToCart);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateCart(req, res, next) {
    const { id } = req.params;
    try {
      const updateCart = await cartsDao.updateById(id, req.body);
      const response = successResponse(updateCart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteCart(req, res, next) {
    const { id } = req.params;
    try {
      const deleteCart = await cartsDao.deleteById(id);
      const response = successResponse(deleteCart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteProductOfCart(req, res, next) {
    const { id, id_prod } = req.params;
    try {
      const deleteProductInCart = await cartsDao.deleteProductById(id, id_prod);
      const response = successResponse(deleteProductInCart);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CartsController();
