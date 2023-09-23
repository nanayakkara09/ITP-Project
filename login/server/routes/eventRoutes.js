const express =require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');

const{event,eventUpdate,eventDelete,eventSuccess,eventAbout,eventDetail,eventHome}=require('../controllers/invController')

//middleware
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)

router.get('/event',event);
router.post('/eventUpdate',eventUpdate);
router.delete('/eventDelete',eventDelete);
router.post('/eventSuccess',eventSuccess);
router.post('/eventAbout',eventAbout);
router.post('/eventDetail',eventDetail);
router.post('/eventHome',eventHome);

module.exports=router