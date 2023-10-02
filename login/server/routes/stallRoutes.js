const express = require('express');
const router = express.Router();
const cors = require('cors');
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
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)
router.post('/stallreq', stallreq);
router.get('/stalladminreq', stalladminreq);
router.delete('/deleteStallreq/:id', deleteStallreq);
router.post('/createStall', createStall);
router.post('/Stalllogin', Stalllogin);
router.get('/StallOwnerDashboard', StallOwnerDashboard);
router.post('/createProduct', createProduct);
router.get('/getAllProducts', getAllProducts)


module.exports = router