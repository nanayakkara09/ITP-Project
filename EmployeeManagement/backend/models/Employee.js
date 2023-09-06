// User.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String, // You can store the avatar URL as a string
  phoneNumber: String,
  countryCode: String,
  idNumber: String,
  nameA:String,
  nameB:String,
  nameC:String,
  nameD:String, // Note: Be sure to hash the password before saving it in production
  avatar:String,
  avatarA:String,
  avatarB:String,
  avatarC:String,
  avatarD:String,
  countryCode:String,
  idNumber:String,
  idNumberA:String,
  idNumberB:String,
  idNumberC:String,
  idNumberD:String,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

