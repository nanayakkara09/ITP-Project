const mongoose = require('mongoose');
const {Schema} = mongoose

const menuSchema = new Schema({
  category: String,
  name: String,
  price: String,
  imageUrl: String,
});

const MenuModel = mongoose.model('MenuItem', menuSchema);
module.exports = MenuModel