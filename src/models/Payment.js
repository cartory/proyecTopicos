const { Model } = require("../../config/Model");
const collection = "payments";
const billPayment = "bill";
const paypalClient = require("../../config/paypal.client");
const payoutsSdk = require("@paypal/payouts-sdk");

class Payment extends Model {
  static instance = new Payment();

  constructor() {
    super(collection);
  }

  async newBill(paymentID, bill) {
    return this.db.child(`${paymentID}/${billPayment}`).set(bill);
  }

  async getBill(paymentID) {
    return await this.db.child(paymentID).child(billPayment).once("value");
  }

  async getPaypalPayout(payoutID) {
    try {
      const request = new payoutsSdk.payouts.PayoutsGetRequest(payoutID);
      // //Optional, By default pageSize is set to 1000, page is set to 1
      request.page(1);
      request.pageSize(10);
      request.totalRequired(true);
      return await paypalClient.client().execute(request);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = { Payment };
