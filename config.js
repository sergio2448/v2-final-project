const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DB_PASSWORD: process.env.DB_PASSWORD,
  DATASOURCE: process.env.DATASOURCE,
  MONGO_DB_USER: process.env.MONGO_DB_USER,
};