const { Model } = require("../../config/Model");
const collection = "payment_methods";

class PaymentMethod extends Model {
  static instance = new PaymentMethod();

  constructor() {
    super(collection);
  }
}

module.exports = { PaymentMethod };
