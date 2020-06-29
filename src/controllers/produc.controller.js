const { Product } = require("../models/Product");

class ProductController {
  static async all(req, res) {
    res.json(await Product.instance.all());
  }

  static async find(req, res) {
    res.json(await Product.instance.find(req.params.id));
  }

  static async store(req, res) {
    res.json(await Product.instance.create(req.body));
  }

  static async update(req, res) {
    res.json(await Product.instance.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await Product.instance.destroy(req.params.id));
  }
}

module.exports = { ProductController };