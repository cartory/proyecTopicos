//'use strict'
const { Model } = require("../../config/Model");
const collection = "categories";

class Category extends Model {

  constructor() {
    super(collection);
  }
}
const category = new Category();
module.exports = { category };
