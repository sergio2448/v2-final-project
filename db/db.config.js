//const firebaseConfig = require("./firebase.firebase.config.json");
const envConfig = require("../config");

module.exports = {
  file: {
    carts: "./data/carts.json",
    products: "./data/products.json",
  },
  mongodb: {
    uri: `mongodb+srv://${envConfig.MONGO_DB_USER}:${envConfig.DB_PASSWORD}@coderhouse.2ihrzcb.mongodb.net/?retryWrites=true&w=majority`,
  },
  firebase: {
    credentials: {
      type: process.env.FIREBASE_TYPE,
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: process.env.FIREBASE_AUTH_URI,
      token_uri: process.env.FIREBASE_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER,
      client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
    },
  },
};
