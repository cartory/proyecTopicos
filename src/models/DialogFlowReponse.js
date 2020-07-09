const { Category } = require("../models/Category");
const { Order } = require("../models/Order");
const { Payment } = require("../models/Payment");
const { Product } = require("../models/Product");
const { User } = require("../models/User");
const { PaymentMethod } = require("../models/PaymentMethod");

class DialogFlowResponse {
  static instance = new DialogFlowResponse();

  static async filterOrderByUserClient(userID, clientID){
    return await Payment.getBills(userID, clientID);
  }

  static async filterPaymenMethodByUserClient(userID, clientID){
    return await PaymentMethod.getPaymenMethod(userID, clientID);
  }
}

module.exports = { DialogFlowResponse };
