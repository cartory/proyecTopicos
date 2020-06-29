const { Model } = require("../../config/Model");
const collection = "orders";

class Order extends Model {
  static instance = new Order();

  constructor() {
    super(collection);
  }
}

module.exports = { Order };
