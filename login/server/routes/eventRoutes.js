const express =require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');


const{eventForm,eventUpdate,eventDelete,eventSuccess,eventHome,eventDetail,eventAbout,eventDel}=require('../controllers/eventController')

//middleware
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)

router.get('/eventForm',eventForm);
router.post('/eventUpdate',eventUpdate);
router.delete('/eventDelete',eventDelete);
router.post('/eventSuccess',eventSuccess);
router.post('/eventHome',eventHome);
router.post('/eventDetail',eventDetail);
router.post('/eventAbout',eventAbout);
router.post('/eventDel',eventDel);




module.exports=router