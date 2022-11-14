const express = require("express");
const checkRoutes = require("./middlewares/error.middleware");
const apiRoutes = require("./routers/app.routers");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", apiRoutes);

app.use(checkRoutes);

module.exports = app;