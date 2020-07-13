
const { category } = require("../models/Category");

class CategoryController {
  static async all(req, res) {
    res.json(await category.all());
  }

  static async find(req, res) {
    res.json(await category.find(req.params.id));
  }

  static async store(req, res) {
    res.json(await category.create(req.body));
  }

  static async update(req, res) {
    res.json(await category.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await category.destroy(req.params.id));
  }
}


module.exports = { CategoryController };
