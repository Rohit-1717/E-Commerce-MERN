const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/product.controller");
const {
  isAuthenticatedUser,
  isAdmin,
} = require("../middleware/auth.middleware");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/products/new").post(isAuthenticatedUser,isAdmin, createProduct);

router
  .route("/products/:id")
  .put(isAuthenticatedUser,isAdmin, updateProduct)
  .delete(isAuthenticatedUser,isAdmin, deleteProduct)
  .get(getProductDetails);

module.exports = router;
