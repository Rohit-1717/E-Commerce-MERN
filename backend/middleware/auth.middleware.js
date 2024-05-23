const jwt = require('jsonwebtoken');
const User = require('../modals/user.modal.js'); // Adjust path as needed
const ErrorHandler = require('../utils/errorHandler.js');

const isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler('Please login to access this resource', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return next(new ErrorHandler('User not found', 404));
    }

    next();
  } catch (error) {
    return next(new ErrorHandler('Invalid or expired token', 401));
  }
};

const isAdmin = (req, res, next) => {
  if (!req.user) {
    return next(new ErrorHandler('User not authenticated', 401));
  }

  if (req.user.role !== 'admin') {
    return next(new ErrorHandler('Access denied. Admins only.', 403));
  }

  next();
};

module.exports = { isAuthenticatedUser, isAdmin };
