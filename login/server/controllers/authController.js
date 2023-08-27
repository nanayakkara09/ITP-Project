const User =require('../models/user');
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

module.exports ={
    test,
    registerUser,
    loginUser,
    getProfile,
    updateUser,
  deleteUser,
  handleLogout,
  
}