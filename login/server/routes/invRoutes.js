const express =require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const{addNew}=require('../controllers/invController')

//middleware
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)

router.post('/',addNew);




module.exports=router


