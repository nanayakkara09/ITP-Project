const express = require('express');
const router = express.Router();
const Order = require('../models/OrderModel');

router.post('/add-to-cart', async (req, res) => {
  try {
    const { name, quantity, price, image } = req.body;
    const total = price * quantity;  // Calculate total price

    const order = new Order({ name, quantity, price, total, image });  // Include total in the order
    await order.save();
    res.status(201).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



module.exports = router;

  