const { Model } = require("../../config/Model");
const collection = "payments";

class Payment extends Model {
  static instance = new Payment();

  constructor() {
    super(collection);
  }
}

module.exports = { Payment };
