const { Category } = require("../models/category");

class CategoryController {
  static async all(req, res) {
    res.json(await Category.instance.all());
  }

  static async find(req, res) {
    res.json(await Category.instance.find(req.params.id));
  }

  static async store(req, res) {
    res.json(await Category.instance.create(req.body));
  }

  static async update(req, res) {
    res.json(await Category.instance.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await Category.instance.destroy(req.params.id));
  }
}

module.exports = { CategoryController };
