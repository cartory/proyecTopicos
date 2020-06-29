const { Order } = require("../models/Order");

class OrderController {
  static async all(req, res) {
    res.json(await Order.instance.all());
  }

  static async find(req, res) {
    res.json(await Order.instance.find(req.params.id));
  }

  static async store(req, res) {
    res.json(await Order.instance.create(req.body));
  }

  static async update(req, res) {
    res.json(await Order.instance.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await Order.instance.destroy(req.params.id));
  }
}

module.exports = { OrderController };