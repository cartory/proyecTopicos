const { Model } = require("../../config/Model");
const { user } = require("./User");
const collection = "payment_methods";

class PaymentMethod extends Model {
  constructor() {
    super(collection);
  }

  async getPaymentMethods(userID, clientID) {
    var payment_methods = await this.all();
    var array = [];
    payment_methods.forEach((order) => {
      var o = order.val();
      o.id = order.key;
      if (
        order.child("userID").val() == userID &&
        order.child("clientID").val() == clientID
      ) {
        array.push(o);
      }
    });
    console.log(array);
    return array;
  }
}

const paymentMethod = new PaymentMethod();
module.exports = { paymentMethod };
