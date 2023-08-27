const express =require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const{test,registerUser,loginUser,getProfile,updateUser, deleteUser,handleLogout}=require('../controllers/authController')

//middleware
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)

router.get('/',test)
router.post('/register',registerUser)
router .post('/login',loginUser)
router.get('/profile', getProfile)
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/logout', handleLogout);



module.exports=router