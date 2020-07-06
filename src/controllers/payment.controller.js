const { Payment } = require("../models/Payment");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const paypalClient = require("../../config/paypal.client");
const payoutsSdk = require("@paypal/payouts-sdk");
class PaymentController {
  static async all(req, res) {
    res.json(await Payment.instance.all());
  }

  static async find(req, res) {
    res.json(await Payment.instance.find(req.params.id));
  }

  static async store(req, res) {
    res.json(await Payment.instance.create(req.body));
  }

  static async update(req, res) {
    res.json(await Payment.instance.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await Payment.instance.destroy(req.params.id));
  }

  static async newBill(req, res) {
    res.json(await Payment.instance.newBill(req.params.id, req.body));
  }

  static async getBill(req, res) {
    res.json(await Payment.instance.getBill(req.params.id));
  }

  static async createPayment(req, res) {
    try {
      const a = await stripe.tokens.create({
        card: {
          number: req.body.number,
          exp_month: req.body.exp_month,
          exp_year: req.body.exp_year,
          cvc: req.body.cvc,
        },
      });

      const customer = await stripe.customers.create({
        email: req.body.email || "",
        source: a.id,
        name: req.body.name,
        phone: req.body.phone,
      });

      const charge = await stripe.charges.create({
        amount: req.body.amount * 100,
        description: req.body.description,
        currency: "bob",
        customer: customer.id,
        receipt_email: req.body.email,
      });

      res.json(charge);
    } catch (err) {
      console.log(err);
    }
  }

  static async paymentPaypal(req, res) {
    const batchID = "Test_sdk_" + Math.random().toString(36).substring(7);
    
    const request = new payoutsSdk.payouts.PayoutsPostRequest();
    const body = req.body;
    body.sender_batch_header.sender_batch_id = batchID;

    request.requestBody(body);
    const response = await paypalClient.client().execute(request);
    console.log(response);
    // 
    const request2 = new payoutsSdk.payouts.PayoutsGetRequest(batchID);
    request2.page(1);
    request2.pageSize(10);
    request2.totalRequired(true);

    const response2 = await paypalClient.client().execute(request2);
    res.status(200).json(response2);
  }

  // static async getPaypalPayout(req, res) {
  //   const { batchID } = req.body;

  //   const request = new payoutsSdk.payouts.PayoutsGetRequest(batchID);
  //   //Optional, By default pageSize is set to 1000, page is set to 1
  //   request.page(1);
  //   request.pageSize(10);
  //   request.totalRequired(true);

  //   const response = await paypalClient.client().execute(request);
  //   res.status(200).json(response);
  // }
}

module.exports = { PaymentController };
