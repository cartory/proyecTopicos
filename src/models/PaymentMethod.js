
const { Model } = require("../../config/Model");
const collection = "payment_methods";

class PaymentMethod extends Model {

  constructor() {
    super(collection);
  }

  static async getPaymenMethod(userID, clientID) {
    var payment_methods = await this.all();
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

const paymentMethod = new PaymentMethod(); 
module.exports = { paymentMethod };
