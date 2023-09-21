const User =require('../models/user');
const Feedback = require('../models/feedback');
const Support = require('../models/support');

const {hashPassword,comparePassword}=require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test=(req,res) =>{
    res.json('test is working')
}

//register endpoint
const registerUser = async (req, res) => {
  try {
    const { name, address, phonenumber, email, password, userType,securityQuestion,securityAnswer } = req.body;

    // Validation for required fields
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
if(!email){
  return res.json({
      error:'email is required'
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

  if(!securityQuestion){
    return res.json({
        error:'securityQuestion is required'
    })
  };
  if(!securityAnswer){
    return res.json({
        error:'securityAnswer is required'
    })
  };
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

    return res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Registration failed' });
  }
};
 
//login endpoint
// Server-side login logic
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists in the database

    // Assuming you have a 'userType' field in your user document
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: 'No User found',
      });
    }

    // Check password match
    const match = await comparePassword(password, user.password);

    if (match) {
      // Determine user type
      const userType = user.userType; // Assuming userType field exists in your database

      jwt.sign({ email: user.email, id: user._id, name: user.name, userType }, process.env.JWT_SECRET, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json({ user, userType }); // Include userType in the response
      });
    } else {
      res.json({
        error: 'Password do not match!',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



const getProfileA = async (req, res) => {
  const { id } = req.params; // Assuming the user's ID is provided in the URL parameter

  try {
    // Fetch user data including address and phone number based on the provided user ID
    const userData = await User.findById(id, 'name email address phonenumber');

    if (!userData) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching user data' });
  }
};


const getProfile = (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to verify token' });
      }

      try {
        // Fetch user data including address and phone number
        const userData = await User.findOne({ email: user.email }, 'name email address phonenumber');

        if (!userData) {
          return res.status(404).json({ error: 'User not found' });
        }

        res.json(userData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching user data' });
      }
    });
  } else {
    res.json(null);
  }
};



// Update user
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const { name,address,email,phonenumber, password } = req.body;
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
    if(!email){
      return res.json({
          error:'Email is required!'
      })
  } ;
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
    const { userId, feedbackText,userName } = req.body;
  
    try {
      // Create a new feedback document using the Feedback model
      const newFeedback = new Feedback({
        userId,
        feedbackText,
        userName,
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

  const getTotalUsers = async (req, res) => {
    try {
      const totalUsers = await User.countDocuments();
      res.json({ totalUsers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching total users' });
    }
  };
  const submitSupport = async (req, res) => {
    const { userId, supportText } = req.body;
  
    try {
      // Create a new support message document using the Support model
      const newSupport = new Support({
        userId,
        supportText,
        createdAt: new Date(),
      });
  
      // Save the support message to the database
      await newSupport.save();
  
      // Send a success response
      res.status(200).json({ message: 'Support message submitted successfully' });
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ message: 'Error submitting Support message' });
    }
  };


  const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({ userType: 'customer' }, 'name email address phonenumber');
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching customer users' });
    }
  };
  const getAllFeedbacks = async (req, res) => {
    try {
      const feedbacks = await Feedback.find();
      res.json(feedbacks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching all feedbacks' });
    }
  };




  const updateUserA = async (req, res) => {
    const { id } = req.params;
    try {
        const { name,address,email,phonenumber, } = req.body;
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
    if(!email){
      return res.json({
          error:'Email is required!'
      })
  } ;
     
        
      const user = await User.findByIdAndUpdate(
        id,
        {
          name,
          address,
          phonenumber,
          email,
          
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


module.exports ={
    test,
    registerUser,
    loginUser,
    getProfileA,
    updateUser,
  deleteUser,
  handleLogout,
  submitFeedback,
  getTotalUsers,
  submitSupport,
  getProfile,
  getAllUsers,
  getAllFeedbacks,
  updateUserA

}