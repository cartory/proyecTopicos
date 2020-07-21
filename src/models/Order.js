
const { Model } = require("../../config/Model");
const { Payment } = require("../models/Payment");
const { product } = require("../models/Product");
const collection = "orders";

class Order extends Model {

  constructor() {
    super(collection);
  }

  async getBills(userID, clientID) {
    var orders = await this.all();
    var array = [];
    orders.forEach((order) => {
      var uid = order.child("userID").val();
      var cid = order.child("clientID").val();
      if (uid === userID && cid === clientID) {
        var k = order.ref.path.pieces_[1];
        array.push(k);
      }
    });

    const payments = await Payment.instance.all();
    var answer = [];

    payments.forEach((payment) => {
      var p = payment.val();
      array.forEach((order) => {
        if (order === p.orderID) {
          answer.push(p.bill);
        }
      });
    });

    return answer;
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

  async saveOrder(order) {

    
  }


}

const order = new Order();
module.exports = { order };
