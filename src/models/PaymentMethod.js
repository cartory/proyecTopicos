const { Model } = require("../../config/Model");
const collection = "payment_methods";

class PaymentMethod extends Model {
  static instance = new PaymentMethod();

  constructor() {
    super(collection);
  }

  static async getPaymenMethod(userID, clientID) {
    var payment_methods = await this.db.once("value");
    var array = [];
    payment_methods.forEach((order) => {
      var uid = order.child("userID").val();
      var cid = order.child("clientID").val();
      if (uid === userID && cid === clientID) {
        array.push(order);
      }
    });
    return array;
  }
}

module.exports = { PaymentMethod };
