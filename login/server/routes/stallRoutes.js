const express = require('express');
const router = express.Router();
const cors = require('cors');
const {stallreq, stalladminreq, deleteStallreq,getStall,getAllStall,deleteStall} = require('../controllers/stallController');



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
router.get('/fetchStall/:id', getStall);
router.get('/getAllStall', getAllStall);
router.delete('/deleteStall/:id', deleteStall);

<<<<<<< HEAD
module.exports = router
=======
module.exports = router;
>>>>>>> parent of e576844a6 (up)
