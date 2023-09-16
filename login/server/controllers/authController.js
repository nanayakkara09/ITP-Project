const User =require('../models/user');
const Feedback = require('../models/feedback');
const driverRegis = require('../models/driverRegistration');
const {hashPassword,comparePassword}=require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test=(req,res) =>{
    res.json('test is working')
}

//register endpoint
const registerUser=async(req,res) =>{
    try {
        const{name,address,phonenumber,email,password}=req.body;
        //check if name was entered
        if(!name){
            return res.json({
                error:'name is required'
            })
        };
        if(!address){
          return res.json({
              error:'address is required'
          })
      };
      if(!phonenumber ||phonenumber.length<10){
        return res.json({
            error:'phone Number required 10 numbers'
        })
    };
        if(!password || password.length < 6){
            return res.json({
                error:'password is requed and shoul be 6 charecters! '
            })

        } ; 
        //check email
        const exist=await User.findOne({email})
        if(exist){
            return res.json({
                error:'email is taken alrady'
            })
        }
        const hashedPassword=await hashPassword(password)
        const user=await User.create({
            name,
            address,
            phonenumber,
            email,
            password:hashedPassword,
        })

        return res.json(user)
     } catch (error) {
        console.log(error)
    }
};
 
//login endpoint
const loginUser =async(req,res)=>{
    try {
        const{email,password}=req.body;
        //check if user exists
        const user=await User.findOne({email})
        if(!user){
            return res.json({
                error:'No User found'
            })
        }
        //check password match
        const match=await comparePassword(password,user.password)
        if(match){
           jwt.sign({email: user.email,id: user._id, name:user.name},process.env.JWT_SECRET,{},(err,token) => {
            if(err) throw err;
            res.cookie('token',token).json(user)
           })
        }
        if(!match){
            res.json({
                error:'password do not match!'
            })
        }
    } catch (error) {
        console.log(error)
    }

}

const getProfile =(req,res)=>{
const {token}=req.cookies
if(token){
    jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
        if(err)throw err;
        res.json(user)

    })
}else{
    res.json(null)
}
}

// Update user
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const { name,address,email, password } = req.body;
        if(!name){
            return res.json({
                error:'name is required'
            })
        };
        if(!address){
          return res.json({
              error:'address is required'
          })
      };
      if(!phonenumber ||phonenumber.length<10){
        return res.json({
            error:'phon Number required 10 numbers'
        })
    };
        if(!password || password.length < 6){
            return res.json({
                error:'password is requed and shoul be 6 charecters! '
            })
    
        } ;
        const hashedPassword=await hashPassword(password)
      const user = await User.findByIdAndUpdate(
        id,
        {
          name,
          address,
          phonenumber,
          email,
          password:hashedPassword,
        },
        { new: true }
      );
  
      if (!user) {
        return res.json({
            error:'No User found'
        })
      }
  
      res.json(user);
    } catch (error) {
      console.log(error);
      
    }
  };
  
  // Delete user
  const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await User.findByIdAndRemove(id);
      if (!user) {
        return res.json({
            error:'No User found'
        })
      }
  
      res.json({ message: 'User deleted' });
    } catch (error) {
      console.log(error);
   
    }
  };

  const handleLogout = async (req, res) => {
    try {
      res.clearCookie('token'); // Clear the token cookie
      res.json({ message: 'Logout successful' }); // Send success response
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to logout' }); // Send error response
    }
  };

  const submitFeedback = async (req, res) => {
    const { userId, feedbackText } = req.body;
  
    try {
      // Create a new feedback document using the Feedback model
      const newFeedback = new Feedback({
        userId,
        feedbackText,
        createdAt: new Date(),
      });
  
      // Save the feedback to the database
      await newFeedback.save();
  
      // Send a success response
      res.status(200).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ message: 'Error submitting feedback' });
    }
  };

  //DriverRegistration details
  //ayesha

  // Function to validate deliverer data
const validateDelivererData = (req, res) => {
  const {
      username,
      email,
      mobile,
      nic,
      gender,
      vehicleNo,
      deliveryArea,
      password,
  } = req.body;

  if (!username || !email || !mobile || mobile.length < 10 || !nic || !gender || !vehicleNo || !deliveryArea || !password || password.length < 6) {
      return res.status(400).json({ error: 'Invalid deliverer data' });
  }
  return true;
};

// Function to add a new deliverer
const addDeliverer = async (req, res) => {
  try {
      if (!validateDelivererData(req, res)) {
          return;
      }

      const newDeliverer = new deliverer(req.body);
      await newDeliverer.save();
      res.json("Deliverer Added");
  } catch (err) {
      console.error(err);
      res.status(500).json({ status: "Error adding deliverer", error: err.message });
  }
};

// Function to retrieve all deliverers
const getAllDeliverers = async (req, res) => {
  try {
      const deliverers = await deliverer.find();
      res.json(deliverers);
  } catch (err) {
      console.error(err);
      res.status(500).json({ status: "Error fetching deliverers", error: err.message });
  }
};

// Function to update a deliverer
const updateDeliverer = async (req, res) => {
  try {
      const userId = req.params.id;

      if (!validateDelivererData(req, res)) {
          return;
      }

      const updateDelivererData = req.body;
      await deliverer.findByIdAndUpdate(userId, updateDelivererData);
      res.status(200).json({ status: "Deliverer updated" });
  } catch (err) {
      console.error(err);
      res.status(500).json({ status: "Error updating deliverer", error: err.message });
  }
};

// Function to delete a deliverer
const deleteDeliverer = async (req, res) => {
  try {
      const userId = req.params.id;
      await deliverer.findByIdAndDelete(userId);
      res.status(200).json({ status: "Deliverer deleted" });
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ status: "Error deleting deliverer", error: err.message });
  }
};

// Function to retrieve a specific deliverer by ID
const getDelivererById = async (req, res) => {
  try {
      const userId = req.params.id;
      const user = await deliverer.findById(userId);
      res.status(200).json({ status: "Deliverer fetched", user });
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ status: "Error fetching deliverer", error: err.message });
  }
};

//end of ayeshas crud

module.exports ={
  //driver registration
    getDelivererById,
    deleteDeliverer,
    updateDeliverer,
    getAllDeliverers,
    addDeliverer,
    //driver registration end
    test,
    registerUser,
    loginUser,
    getProfile,
    updateUser,
    deleteUser,
    handleLogout,
    submitFeedback,
}