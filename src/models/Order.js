const { Model } = require("../../config/Model");
const collection = "orders";

class Order extends Model {
  static instance = new Order();

  constructor() {
    super(collection);
  }

  static async getBills(userID, clientID) {

    var orders = await this.db.once("value");
    var array = [];
    orders.forEach((order) => {
      var uid = order.child("userID").val;
      var cid = order.child("clientID").val;
      if (uid === userID && cid === clientID) {
        array.push(order);
      }
    });
    return array;
  }

}

module.exports = { Order };
