const express = require('express');
const router = express.Router();
const cors = require('cors');
const {stallreq, 
    stalladminreq, 
    deleteStallreq,  
    createStall
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

router.post('/createStall', createStall)

module.exports = router