const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const employeeSchema = new mongoose.Schema({
      name :String,
      email : String,
      countryCode: String,                                                                                                                                       
      phoneNumber :String,
      idNumber : String,
      password : String,
      cPassword :String,
});

// JWT token
employeeSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

module.exports = mongoose.model("Employee", employeeSchema);
