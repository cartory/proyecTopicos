//'use strict'
const payoutsNodeJssdk = require("@paypal/payouts-sdk");

function client() {
  return new payoutsNodeJssdk.core.PayPalHttpClient(environment());
}

function environment() {
  let clientId = "AQ7UMz_SmpByZlVbJL8O5DGxdWsOnSq_DCYpKSUpCQOzbA2YfJIEWSvRecfkYhRGDvOL5oUk8HhWRKQC";
  let clientSecret = "EHWvUi1gM8cs4TUoK84NvDfsj8J3PZ6ZPRxUymewKKoHedUSeuC8tvWeFtEhEpecGplfcgqiPjbVgGhc";

  if (process.env.NODE_ENV === "production") {
    return new payoutsNodeJssdk.core.LiveEnvironment(clientId, clientSecret);
  }

  return new payoutsNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
}

module.exports = { client: client };
