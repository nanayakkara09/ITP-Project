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
    enum: ['admin', 'customer'], 
    default: 'customer', 
  },
  securityQuestions: [
    {
      question: String,
      answer: String,
    },
  ],
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
