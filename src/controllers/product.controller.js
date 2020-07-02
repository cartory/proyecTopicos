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

  static async getByPromo(req, res) {
    res.json(await Product.instance.getByPromo());
  }

  static async getByCategory(req, res) {
    res.json(await Product.instance.getByCategory(req.params.cat));
  }

  static async getByName(req, res) {
    res.json(await Product.instance.getByName(req.params.name));
  }
}

module.exports = { ProductController };
