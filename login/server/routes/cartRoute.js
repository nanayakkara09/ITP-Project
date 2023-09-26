const express = require('express');
const router = express.Router();
const Order = require('../models/OrderModel');

// Route to get all items in the cart
router.get('/get-cart', async (req, res) => {
  try {
    const cartItems = await Order.find({});
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Route to update quantity and total of an item in the cart
router.put('/update-quantity/:id', async (req, res) => {
  const { id } = req.params;
  const { quantity, total } = req.body;
  try {
    const updatedItem = await Order.findByIdAndUpdate(id, { quantity, total }, { new: true });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to delete an item from the cart
router.delete('/delete-item/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Order.findByIdAndDelete(id);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
