const { Category } = require("../models/Category");
const { Order } = require("../models/Order");

class DialogFlowResponse {
  static async filterOrderByUserClient(userID, clientID) {
    return await Order.getBills(userID, clientID);
  }

  static async getPreviousOrders(userID, clientID) {
    return await Order.instance.getPreviousOrders(userID, clientID);
  }
}

module.exports = { DialogFlowResponse };
