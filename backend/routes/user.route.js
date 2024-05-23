const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controllers/user.controller");
const router = express.Router();

// RegisterUser Route
router.route("/register").post(registerUser);

// Login User Route
router.route("/login").post(loginUser);

// Forgot Password Route

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

// Logout User
router.route("/logout").get(logout);

module.exports = router;
