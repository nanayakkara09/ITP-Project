const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    stallname: String,
    type: String,    
    password: String,
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    phone: String,
    cardtype: String,
    cardNumber: String,
    expireYear: String,
    expireMonth: String,
    cvn: String,

  });

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;