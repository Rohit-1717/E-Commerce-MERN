const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error.middleware.js");

app.use(express.json());

// Route imports

const product = require("./routes/product.route");

app.use("/api/v1", product);

//Middleware for error

app.use(errorMiddleware);

module.exports = app;
