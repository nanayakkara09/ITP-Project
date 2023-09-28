const express = require('express');
const router = express.Router();
const Order = require('../models/OrderModel');

// Inside your API route (e.g., `OrderRoute.js`)
router.post('/add-to-cart', async (req, res) => {
  try {
    const { name, quantity, price, image } = req.body;
    const total = price * quantity;  // Calculate total price

    // Fetch the email from the session
    const userEmail = req.session.userEmail;

    // Use the email as needed in your logic
    // ...

    const order = new Order({ name, quantity, price, total, image, userEmail });  // Include total in the order
    await order.save();
    res.status(201).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




module.exports = router;

  