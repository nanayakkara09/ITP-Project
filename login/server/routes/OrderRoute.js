const express = require('express');
const router = express.Router();
const Order = require('../models/OrderModel');
const ConfirmedOrder = require('../models/ConfirmOrderModel');
const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Colombo');



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





router.get('/confirmed-orders/:date', async (req, res) => {
  try {
    const date = moment(req.params.date).startOf('day');
    const endOfDay = moment(date).endOf('day');

    const confirmedOrders = await ConfirmedOrder.find({
      date: {
        $gte: date.toDate(),
        $lte: endOfDay.toDate()
      }
    });

    res.json(confirmedOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//Thilinaaa

// Define a route to delete order details by ID
router.delete('/delete/:id', async (req, res) => {
  const orderId = req.params.id;

  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully', deletedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});


// Define a route to fetch order details by ID
router.get('/orders/:id', async (req, res) => {
  try {
    const orderId = req.params.id;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order fetched successfully', order });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Error with getting order details", error: error.message });
  }
});

// Define a route to get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ status: "orders fetched", orders });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Error with getting orders", error: error.message });
  }
});

// Define a route to get all orders
router.get('/Corder', async (req, res) => {
  try {
    const Conforders = await ConfirmedOrder.find();
    res.status(200).json({ status: "orders fetched", Conforders });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: "Error with getting orders", error: error.message });
  }
});













module.exports = router;
