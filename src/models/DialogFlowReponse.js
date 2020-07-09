const { Category } = require("../models/Category");
const { Order } = require("../models/Order");
const { Payment } = require("../models/Payment");
const { Product } = require("../models/Product");
const { User } = require("../controllers/user.controller");

class DialogFlowResponse {
  static instance = new DialogFlowResponse();

  static async filterOrderByUserClient(userID, clientID) {
    return await Order.getBills(userID, clientID);
  }

}

module.exports = { DialogFlowResponse };
