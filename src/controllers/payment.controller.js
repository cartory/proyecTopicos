const { Payment } = require("../models/Payment");

class PaymentController {
  static async all(req, res) {
    res.json(await Payment.instance.all());
  }

  static async find(req, res) {
    res.json(await Payment.instance.find(req.params.id));
  }

  static async store(req, res) {
    res.json(await Payment.instance.create(req.body));
  }

  static async update(req, res) {
    res.json(await Payment.instance.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await Payment.instance.destroy(req.params.id));
  }

  static async newBill(req, res) {
    res.json(await Payment.instance.newBill(req.params.id, req.body));
  }

  static async getBill(req, res) {
    res.json(await Payment.instance.getBill(req.params.id));
  }
}

module.exports = { PaymentController };
