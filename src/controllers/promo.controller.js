const { Promo } = require("../models/Promo");

class PromoController {
  static async all(req, res) {
    // Promo.instance.test();
    var val = await Promo.instance.test();
    console.log(val);
    res.json(val);
  }

  static async find(req, res) {
    res.json(await Promo.instance.find(req.params.id));
  }

  static async store(req, res) {
    res.json(await Promo.instance.create(req.body));
  }

  static async update(req, res) {
    res.json(await Promo.instance.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await Promo.instance.destroy(req.params.id));
  }
}

module.exports = { PromoController };