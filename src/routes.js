const { Router } = require("express");
const routes = Router();

const contactController = require("./controllers/promo.controller");
const categoryController = require("./controllers/category.controller");

routes
  //  PROMOS
  .get("/promos", contactController.all)
  .post("/promos", contactController.store)
  .get("/promos/:id", contactController.find)
  .put("/promos/:id", contactController.update)
  .delete("/promos/:id", contactController.destroy)
  //  CATEGORIES
  .get("/categories", categoryController.all)
  .post("/categories", categoryController.store)
  .get("/categories/:id", categoryController.find)
  .put("/categories/:id", categoryController.update)
  .delete("/categories/:id", categoryController.destroy);
module.exports = routes;
