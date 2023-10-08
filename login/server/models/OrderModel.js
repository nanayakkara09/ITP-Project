const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  date: Date,  
  total: Number,
  image: String,
  status: {
    type: String,
    enum: ['pending', 'confirmed'], 
    default: 'pending' 
  }
});
 



const Order = mongoose.model('Order', orderSchema);

module.exports = Order;


