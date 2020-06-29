const { Model } = require("../../config/Model");
const collection = "payments";
const billPayment = "bill";

class Payment extends Model {
  static instance = new Payment();

  constructor() {
    super(collection);
  }
  
  async newBill(paymentID, bill) {
    return this.db.child(`${paymentID}/${billPayment}`).set(bill);
	}

  async getBill(paymentID) {
    return await this.db.child(paymentID).child(billPayment).once('value');
  }

}

module.exports = { Payment };
