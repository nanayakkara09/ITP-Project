const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  address: String,
  phonenumber: Number,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  userType: {
    type: String,
    enum: ['admin', 'customer'], // 'admin' for admin users, 'customer' for regular users
    default: 'customer', // Default to 'customer' for new users
  },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
