const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DB_PASSWORD: process.env.MONGOPASSWORD,
  DATASOURCE: process.env.DATASOURCE || "mongo",
  MONGO_DB_USER: process.env.MONGOUSER,
};