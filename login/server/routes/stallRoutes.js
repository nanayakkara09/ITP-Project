const express = require('express');
const router = express.Router();
const cors = require('cors');
const {stallreq} = require('../controllers/stallController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)
router.post('/stallreq', stallreq)

router.post('/addFoodItem', async (req, res) => {
    try {
      // Retrieve food item data from the request body
      const { name, description, price, image } = req.body;
  
      // Validate data if needed
  
      // Add the food item to the stall (you need to define this logic)
      // For example:
      // const updatedStall = await addFoodItemToStall(name, description, price, image);
  
      // Return the updated stall data
      // res.json(updatedStall);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router