const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  total: Number,  // Add a new field for total price
  image: String,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
