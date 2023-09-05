const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  name: String,
  varient: String,
  quantity: Number,
  price: Number,
  image: String,
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;