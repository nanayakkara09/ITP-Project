const express = require('express');
const router = express.Router();
const Order = require('../models/OrderModel');
const ConfirmedOrder = require('../models/ConfirmOrderModel');


router.post('/add-to-cart', async (req, res) => {
  try {
    const { name, quantity, price, image } = req.body;
    const total = price * quantity;  // Calculate total price
    const date = new Date().toISOString().split('T')[0]; // Get current date

    const order = new Order({ 
      name, 
      quantity, 
      price, 
      total, 
      date, 
      image, 
      status: 'pending' // Add status field with a default value
    });  
    await order.save();
    res.status(201).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.put('/confirm-order', async (req, res) => {
  try {
    const { status } = req.body;

    if (status === 'confirmed') {
      const pendingOrders = await Order.find({ status: 'pending' });

      for (const order of pendingOrders) {
        order.status = 'confirmed'; // Update the status to 'confirmed'
        await order.save(); // Save the updated order

        const confirmedOrder = new ConfirmedOrder({
          name: order.name,
          quantity: order.quantity,
          price: order.price,
          date: order.date,
          total: order.total,
          image: order.image,
        });

        await confirmedOrder.save();
      }

      res.json({ message: 'Orders confirmed and moved to confirmorders collection' });
    } else {
      res.status(400).json({ message: 'Invalid status' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});











module.exports = router;
