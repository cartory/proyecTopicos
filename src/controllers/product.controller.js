
const { product } = require("../models/Product");

class ProductController {
  static async all(req, res) {
    res.json(await product.all());
  }

  static async find(req, res) {
    res.json(await product.find(req.params.id));
  }

  static async store(req, res) {
    res.json(await product.create(req.body));
  }

  static async update(req, res) {
    res.json(await product.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await product.destroy(req.params.id));
  }

  static async getByPromo(req, res) {
    console.log("WASSAAA");
    res.json(await product.getByPromo());
  }

  static async getByCategory(req, res) {
    res.json(await product.getByCategory(req.params.cat));
  }

  static async getByName(req, res) {
    res.json(await product.getByName(req.params.name));
  }
}

module.exports = { ProductController };
