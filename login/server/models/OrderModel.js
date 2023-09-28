// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  email: String, 
  date: { type: Date, default: Date.now }, // Add a field for date
  name: String,
  quantity: Number,
  price: Number,
  total: Number,
  image: String,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
