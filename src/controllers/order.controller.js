
const { order } = require("../models/Order");

class OrderController {
  static async all(req, res) {
    res.json(await order.all());
  }

  static async find(req, res) {
    res.json(await order.find(req.params.id));
  }

  static async store(req, res) {
    res.json(await order.create(req.body));
  }

  static async update(req, res) {
    res.json(await order.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await order.destroy(req.params.id));
  }


}

module.exports = { OrderController };
