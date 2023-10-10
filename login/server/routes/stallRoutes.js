const express = require('express');
const router = express.Router();
const cors = require('cors');
<<<<<<< HEAD
const {stallreq, stalladminreq, deleteStallreq,getStall,getAllStall,deleteStall} = require('../controllers/stallController');
=======
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
>>>>>>> parent of 8c057a33c (Stall)


<<<<<<< HEAD

//middleware
=======
// Middleware for CORS
>>>>>>> parent of 8c057a33c (Stall)
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)
router.post('/stallreq', stallreq);
router.get('/stalladminreq', stalladminreq);
router.delete('/deleteStallreq/:id', deleteStallreq);
<<<<<<< HEAD
router.get('/fetchStall/:id', getStall);
router.get('/getAllStall', getAllStall);
router.delete('/deleteStall/:id', deleteStall);
=======
router.post('/createStall', createStall);
router.post('/Stalllogin', Stalllogin);
router.get('/StallOwnerDashboard', StallOwnerDashboard);
router.post('/createProduct', createProduct);
router.get('/getProduct', getProduct);
router.delete('/deleteProduct/:id', deleteProduct);
router.put('/update/:id', updateProduct);
router.get('/getProduct/:id', getProduct);

>>>>>>> parent of 8c057a33c (Stall)

<<<<<<< HEAD
module.exports = router
=======
module.exports = router;
>>>>>>> parent of e576844a6 (up)
