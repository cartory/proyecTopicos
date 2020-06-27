const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://proyectopicos-efc3c.firebaseio.com",
});

module.exports = admin.database();