const app = require("./app.js");
const dotenv = require("dotenv");

const connectDatabase = require("./config/DB.js");

//Handling Uncaught Exception

process.on("uncaughtException", (err) => {
  console.log(`Error;${err.message}`);
  console.log(`Shutting Down Server Due To Uncaught Exception`);
  process.exit(1);
});

//config

dotenv.config({ path: "backend/config/config.env" });

// connecting Database

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejections

process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting Down Server Due To Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
