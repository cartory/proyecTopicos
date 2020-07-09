const { PaymentMethod } = require("../models/PaymentMethod");

class PaymentMethodController {

  static async store(req, res) {
    res.json(await PaymentMethod.instance.create(req.body));
  }

  static async update(req, res) {
    res.json(await PaymentMethod.instance.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await PaymentMethod.instance.destroy(req.params.id));
  }
}

module.exports = { PaymentMethodController };
