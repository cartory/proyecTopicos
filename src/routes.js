const { Router } = require("express");
const { PromoController } = require("./controllers/promo.controller");
const { CategoryController } = require("./controllers/category.controller");
const { UserController } = require("./controllers/user.controller");

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
      .delete("/categories/:id", CategoryController.destroy)
      // USERS
      .get("/users", UserController.all)
      .post("/users", UserController.store)
      .get("/users/:id", UserController.find)
      .put("/users/:id", UserController.update)
      .delete("/users/:id", UserController.destroy)
      // USERS->CLIENTS
      .get("/users/:id/clients", UserController.getClients)
      .post("/users/:id/clients", UserController.newClient)
      .put("/users/:id/clients/:cid", UserController.setClient)
      .get("/users/:id/clients/:cid", UserController.findClient)
      .delete("/users/:id/clients/:cid", UserController.dropClient);
  }
}

module.exports = { MyRouter };
