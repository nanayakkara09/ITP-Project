const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  // wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found with this id. Invalid ${err.path}`;
    const error = new ErrorHandler(message, 400); // Create a new instance with `new` keyword
    return next(error);
  }

  // Duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} entered`;
    const error = new ErrorHandler(message, 400); // Create a new instance with `new` keyword
    return next(error);
  }

  // wrong jwt error
  if (err.name === "JsonWebTokenError") {
    const message = `Your URL is invalid. Please try again later`;
    const error = new ErrorHandler(message, 400); // Create a new instance with `new` keyword
    return next(error);
  }

  // jwt expired
  if (err.name === "TokenExpiredError") {
    const message = `Your URL has expired. Please try again later`;
    const error = new ErrorHandler(message, 400); // Create a new instance with `new` keyword
    return next(error);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
