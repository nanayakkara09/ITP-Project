const express = require('express');
const router = express.Router();
const cors = require('cors');
const {stallreq, stalladminreq, deleteStallreq} = require('../controllers/stallController');



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

module.exports = router