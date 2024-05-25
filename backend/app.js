const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error.middleware.js");

app.use(express.json());
app.use(cookieParser());

// Route imports

const product = require("./routes/product.route");
const user = require("./routes/user.route.js");
const order = require("./routes/orderRoute.js");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//Middleware for error

app.use(errorMiddleware);

module.exports = app;
