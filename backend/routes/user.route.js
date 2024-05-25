const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updateUserPassword,
  updateUserProfile,
  getAllUer,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/user.controller");
const {
  isAuthenticatedUser,
  isAdmin,
} = require("../middleware/auth.middleware");
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

// Get User Details
router.route("/me").get(isAuthenticatedUser, getUserDetails);

// Password Update

router.route("/password/update").put(isAuthenticatedUser, updateUserPassword);

// User Profile Update

router.route("/me/update").put(isAuthenticatedUser, updateUserProfile);

router.route("/admin/users").get(isAuthenticatedUser, isAdmin, getAllUer);

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, isAdmin, getSingleUser)
  .put(isAuthenticatedUser, isAdmin, updateUserRole)
  .delete(isAuthenticatedUser, isAdmin, deleteUser);

module.exports = router;
