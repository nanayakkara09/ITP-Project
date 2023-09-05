const express = require ("express");
const router = express.Router();
const {v4 : uuidv4} = require('uuid');
const Order = require("../models/orderModel");
const stripe = require("stripe")("sk_test_51NY8JELmUcZJ8JMXr9jt6iSzrJqtxGSAk88qjYG9waXHGpn7l2PYkSXtEQBZFVzOajhRcEZWSWZcmChLFSlLWC0k00trln0qsu")
 
router.post('/placeorder' , async(req, res) =>{

     const {token , subtotal , currentUser , cartItems} = req.body
     
    try {
       const customer = await stripe.customers.create({
            email : token.email,
            source: token.id,

       })
       const payment = await stripe.charges.create({
            amount:subtotal*100,
            currency : 'LKR',
            customer : customer.id,
            receipt_email : token.email

       },{
            idempotencyKey : uuidv4()
       })

       if(payment)
       {
            const neworder = new Order({
                  name : currentUser.name,
                  email : currentUser.email,
                  userid : currentUser.userid,
                  orderItems : cartItems, 
                  orderAmount : subtotal,
                 
            })
            neworder.save()
            response.send('Oder placed successfully')
       }
       else{
            res.send('Payment failed')
       }
    } catch (error) {
      
      return res.status(400).json({message: 'Something went wrong'});
    }

});

module.exports = router