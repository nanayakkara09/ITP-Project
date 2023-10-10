const express =require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');


const { addNew, getAllIncomeDetails } = require('../controllers/IncomeExpenses');



//middleware
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)

router.post('/Input',addNew)
router.get('/getIncome',getAllIncomeDetails)
module.exports=router