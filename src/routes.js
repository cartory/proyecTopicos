const { Router } = require("express");
const { PromoController } = require("./controllers/promo.controller");
const { CategoryController } = require("./controllers/category.controller");

class MyRouter {
  static instance = new MyRouter();

  constructor() {
    this.router = Router();
    this.loadRoutes();
  }

  loadRoutes() {
    this.router
      //  PROMOS
      .get("/promos", PromoController.all)
      .post("/promos", PromoController.store)
      .get("/promos/:id", PromoController.find)
      .put("/promos/:id", PromoController.update)
      .delete("/promos/:id", PromoController.destroy)
      //  CATEGORIES
      .get("/categories", CategoryController.all)
      .post("/categories", CategoryController.store)
      .get("/categories/:id", CategoryController.find)
      .put("/categories/:id", CategoryController.update)
      .delete("/categories/:id", CategoryController.destroy);
  }
}

module.exports = { MyRouter };
