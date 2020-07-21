const { paymentMethod } = require("../models/PaymentMethod");

class PaymentMethodController {
  static async find(req, res) {
    res.json(await paymentMethod.getPaymentMethods(req.params.uid, req.params.cid));
  }

  static async all(req, res) 
  {
    res.json(await paymentMethod.all());
  }

  static async store(req, res) {
    res.json(await paymentMethod.create(req.body));
  }

  static async update(req, res) {
    res.json(await paymentMethod.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await paymentMethod.destroy(req.params.id));
  }
}

module.exports = { PaymentMethodController };
