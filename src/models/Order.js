const { Model } = require("../../config/Model");
const { Payment } = require("../models/Payment");
const {  product } = require("../models/Product");
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

  async processOrder(order) {
    var t = 0;
    var temp = [];
    var keys = [];
    var items = order.shopping_cart;
    var products = await product.db.once("value");
    
    products.forEach((prod)=>{
        var pKey = prod.key;
        var p = prod.val();
        console.log(pKey);
        for(var i=0;i<items.length;++i){
          if(items[i].productID===pKey){
            if(items[i].product_quantity>p.stock){
              t++;
            }
            keys.push(pKey);
            temp.push(p);
          }
        }
    });

    if (t === 0) {
      var i = 0;
      var o = await this.create(order);

      temp.forEach(async (p)=>{
          p.stock = p.stock - items[i].product_quantity;
          await product.update(keys[i],p);
          i++;
      });

      return {
        orderId : o.key,
        products : []
      };

    } else {
      return {
        orderId : null,
        products : temp
      };
    }
  }

}

const order = new Order();
module.exports = { order };
