//'use strict'
const serviceAccount = require("../app/credentials.json");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "proyectopicos-efc3c.appspot.com",
  databaseURL: "https://proyectopicos-efc3c.firebaseio.com",
});

module.exports = { database: admin.database() };
