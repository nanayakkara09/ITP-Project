const express = require('express');
const router = express.Router();
const cors = require('cors');
const {
  stallreq,
  stalladminreq,
  deleteStallreq,
  createStall,
  Stalllogin,
  StallOwnerDashboard,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct, 

} = require('../controllers/stallController');

// Middleware for CORS
router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

// Define Routes
router.post('/stallreq', stallreq);
router.get('/stalladminreq', stalladminreq);
router.delete('/deleteStallreq/:id', deleteStallreq);
router.post('/createStall', createStall);
router.post('/Stalllogin', Stalllogin);
router.get('/StallOwnerDashboard', StallOwnerDashboard);
router.post('/createProduct', createProduct);
router.get('/getProduct', getProduct);
router.delete('/deleteProduct/:id', deleteProduct);
router.put('/update/:id', updateProduct);
router.get('/getProduct/:id', getProduct);


module.exports = router;
