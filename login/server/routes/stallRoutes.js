const express = require('express');
const router = express.Router();
const cors = require('cors');
<<<<<<< HEAD
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
=======
const { stallreq, 
        stalladminreq, 
        deleteStallreq,  
        createStall,
        Stalllogin,
        StallOwnerDashboard,
        createProduct,
        getAllProducts,
} = require('../controllers/stallController');

//middleware
>>>>>>> parent of 678692a56 (Update)
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
router.get('/getAllProducts', getAllProducts)

>>>>>>> parent of 8c057a33c (Stall)

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = router
=======
module.exports = router;
>>>>>>> parent of e576844a6 (up)
=======
module.exports = router
>>>>>>> parent of 678692a56 (Update)
