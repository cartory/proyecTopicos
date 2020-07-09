const { Model } = require("../../config/Model");
const collection = "orders";

class Order extends Model {
  static instance = new Order();

  constructor() {
    super(collection);
  }


  async getPreviousOrders(userID, clientID) {
    var orders = await this.all();
    var array = [];
    orders.forEach((order) => {
      if (
        order.child("userID").val() == userID &&
        order.child("clientID").val() == clientID
      ) {
        array.push(order);        
      }
    });
    return array;
  }
}

module.exports = { Order };
