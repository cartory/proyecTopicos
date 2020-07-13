
const { payment } = require("../models/Payment");
const stripe = require("stripe")("sk_test_51H1KvfKPh8MroBE9kkIQJb01LaO1SL8Mc4avwXVQyhwzGqscW2Yvg7byQ0SZYBMzynPvRHfPQXrKjegtEvleV4PS00qvnrYzwy");
const paypalClient = require("../../config/paypal.client");
const payoutsSdk = require("@paypal/payouts-sdk");

class PaymentController {
  static async all(req, res) {
    res.json(await payment.all());
  }

  static async find(req, res) {
    res.json(await payment.find(req.params.id));
  }

  static async store(req, res) {
    res.json(await payment.create(req.body));
  }

  static async update(req, res) {
    res.json(await payment.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await payment.destroy(req.params.id));
  }

  static async newBill(req, res) {
    res.json(await payment.newBill(req.params.id, req.body));
  }

  static async getBill(req, res) {
    res.json(await payment.getBill(req.params.id));
  }

  static async createpayment(req, res) {
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

  static async createPaypalPayout(req, res) {
    try {
      const request = new payoutsSdk.payouts.PayoutsPostRequest();
      req.body.sender_batch_header.sender_batch_id = Date.now().toString();
      // console.log(req.body);
      request.requestBody(req.body);
      const response = await paypalClient.client().execute(request);
      console.log(response);
      res.json(
        await payment.getPaypalPayout(
          response.result.batch_header.payout_batch_id
        )
      );
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = { PaymentController };
