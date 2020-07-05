const serviceAccount = require("../app/credentials.json");
const admin = require("firebase-admin");

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

module.exports = { database: admin.database() };
