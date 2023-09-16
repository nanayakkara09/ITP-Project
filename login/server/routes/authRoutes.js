const express =require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const{test,registerUser,loginUser,getProfile,updateUser, deleteUser,handleLogout,submitFeedback}=require('../controllers/authController');
const{addDeliverer,getAllDeliverers,updateDeliverer,deleteDeliverer,getDelivererById}=require('../controllers/authController');

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
router.post('/submit-feedback', submitFeedback);

// Define routes
router.route("/add").post(addDeliverer);
router.route("/").get(getAllDeliverers);
router.route("/update/:id").put(updateDeliverer);
router.route("/delete/:id").delete(deleteDeliverer);
router.route("/get/:id").get(getDelivererById);




module.exports=router