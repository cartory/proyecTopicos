const { Model } = require("../../config/Model");
const collection = "categories";

class Category extends Model {
  static instance = new Category();

  constructor() {
    super(collection);
  }
}

module.exports = { Category };
