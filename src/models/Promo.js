const { Model } = require("../../config/Model");
const collection = "promos";

class Promo extends Model {
  static instance = new Promo();

  constructor() {
    super(collection);
  }
}

module.exports = { Promo };
