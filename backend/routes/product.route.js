const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  deleteProductReviews,
  getProductReviews,
} = require("../controllers/product.controller");
const {
  isAuthenticatedUser,
  isAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/products/new").post(isAuthenticatedUser, isAdmin, createProduct);

router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, isAdmin, updateProduct)
  .delete(isAuthenticatedUser, isAdmin, deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteProductReviews);

module.exports = router;
