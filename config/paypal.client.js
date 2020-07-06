const payoutsNodeJssdk = require("@paypal/payouts-sdk");
const dotenv = require("dotenv");

dotenv.config();

function client() {
  return new payoutsNodeJssdk.core.PayPalHttpClient(environment());
}

function environment() {
  let clientId = process.env.PAYPAL_CLIENT_ID;
  let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (process.env.NODE_ENV === "production") {
    return new payoutsNodeJssdk.core.LiveEnvironment(clientId, clientSecret);
  }

  return new payoutsNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
}

module.exports = { client: client };
