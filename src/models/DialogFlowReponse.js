const { Order } = require("../models/Order");
const { PaymentMethod } = require("./PaymentMethod");
class DialogFlowResponse {
  static async filterOrderByUserClient(userID, clientID) {
    return await Order.getBills(userID, clientID);
  }

  static async getPreviousOrders(userID, clientID) {
    return await Order.instance.getPreviousOrders(userID, clientID);
  }

  static async getPaymentsMethods(userID, clientID) {
    return await PaymentMethod.instance.getPaymentMethods(userID, clientID);
  }
}

module.exports = { DialogFlowResponse };
