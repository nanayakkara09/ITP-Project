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

module.exports = router