const express = require('express');
const router = express.Router();
const Order = require('../models/OrderModel');

// OrderRoute.js



router.post('/add-to-cart', async (req, res) => {
  try {
    const { name, quantity, price, image, userEmail } = req.body;
    const total = price * quantity;
    const orderDate = new Date(); // Capture the current date

    const order = new Order({ name, quantity, price, total, image, userEmail, orderDate });
    await order.save();
    res.status(201).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});







module.exports = router;

  