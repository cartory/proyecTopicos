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
      var uid = order.child("userID").val();
      var cid = order.child("clientID").val();
      console.log(uid, userID);
      console.log(cid, clientID);
      if (uid == userID && cid == clientID) {
        array.push(order);
      }
    });
    console.log(array);
    return array;
  }
}

const paymentMethod = new PaymentMethod();
module.exports = { paymentMethod };
