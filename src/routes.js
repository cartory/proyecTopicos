const { Router } = require("express");
const { CategoryController } = require("./controllers/category.controller");
const { UserController } = require("./controllers/user.controller");
const { ProductController } = require("./controllers/product.controller");
const { PaymentController } = require("./controllers/payment.controller");
const { OrderController } = require("./controllers/order.controller");

class MyRouter {
  static instance = new MyRouter();

  constructor() {
    this.router = Router();
    this.loadRoutes();
  }

  loadRoutes() {
    this.router
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
      .delete("/users/:id/clients/:cid", UserController.dropClient)
      // PRODUCTS
      .get("/products", ProductController.all)
      .post("/products", ProductController.store)
      .get("/products/:id", ProductController.find)
      .put("/products/:id", ProductController.update)
      .delete("/products/:id", ProductController.destroy)
      // PRODUCTS BY PROMO & CATEGORY
      .get("/products/promo/get", ProductController.getByPromo)
      .get("/products/category/:cat", ProductController.getByCategory)
      .get("/products/name/:name", ProductController.getByName)
      // PAYMENTS
      .get("/payments", PaymentController.all)
      .post("/payments", PaymentController.store)
      .get("/payments/:id", PaymentController.find)
      .put("/payments/:id", PaymentController.update)
      .delete("/payments/:id", PaymentController.destroy)
      // STRIPE
      .post("/stripe/payment",PaymentController.createPayment)
      // PAYMENT->BILL
      .get("/payments/:id/bill", PaymentController.getBill)
      .post("/payments/:id/bill", PaymentController.newBill)
      // ORDERS
      .get("/orders", OrderController.all)
      .post("/orders", OrderController.store)
      .post("/orders/:id/")
      .get("/orders/:id", OrderController.find)
      .put("/orders/:id", OrderController.update)
      .delete("/orders/:id", OrderController.destroy);
  }
}

module.exports = { MyRouter };
