const Stall = require('../models/stall');
const StallRegister = require ('../models/stallRegister');
const {hashPassword,comparePassword}=require('../helpers/stall')
const jwt = require('jsonwebtoken');
const stallProduct = require('../models/stallProduct')

const createStall = async (req, res) => {
    try{
       const {stallName, type, amount, mType,stallId, fName, lName, phonenumber, email, password, payment} = req.body;
       // Check if name was entered
       if (!stallName) {
        return res.json({
            error: 'Name is required'
        });
    };

       if (!password || password.length < 6){
        return res.json({
          error: 'Password is required and should be at least 6 characters long'
       });
       };

       //check email
       const exist = await StallRegister.findOne({email});
       if (exist) {
        return res.json({
          error: 'Email is taken already'
        })
       }  

       const hashedPassword = await hashPassword(password); 
      const createStallResult = await StallRegister.create({
        stallName,
        type,
        amount,
        mType,
        stallId,
        fName,
        lName,
        phonenumber,
        email,
        password: hashedPassword,
        payment
      })

      return res.json(createStallResult)

    }catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error creating a stall' });
    }

} ;

//Login Endpoint
const Stalllogin = async (req, res) => {
  try{
       const {email, password} = req.body;

       //Check if user exist
       const  stall = await StallRegister.findOne({email});
       if(!stall){
        return res.json({
          error: 'No Stall found'
        })
       }

       //Check if password match
       const match = await comparePassword(password, stall.password)
       if (match) {
        jwt.sign({email:stall.email, id:stall._id, fName: stall.fName}, process.env.jwt_SECRET, {}, (err, token) => {
          if (err) throw err;
          res.cookie('token', token).json(stall)
        } )
       }
       if(!match){
        res.json({
          error: ("Password do not match")
        })
       }
  } catch (error) {
      console.log(error)
  }
}

const StallOwnerDashboard = (req, res) => {
const {token}  = req.cookies
if(token) {
  jwt.verify(token, process.env.JWT_SECRET,{}, (err, stall) => {
    if(err) throw err;
    res.json(stall)
  })
} else {
  res.json(null)
}
}

const stallreq = async (req, res) => {
    try {
        const { sName, type, fName, lName, email, phone } = req.body;
        
        // Check if name was entered
        if (!sName) {
            return res.json({
                error: 'Name is required'
            });
        }
        
        const stall = await Stall.create({
            sName,
            type,
            fName,
            lName,
            email,
            phone
        });

        return res.json(stall);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const stalladminreq = async (req, res) => {
    try {
      const stalls = await Stall.find();
      return res.json(stalls);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  const deleteStallreq = async (req, res) => {
    try {
      const { id } = req.params;
      // Use Mongoose to delete the stall by ID
      await Stall.findByIdAndDelete(id);
      res.sendStatus(204); // Send a successful response with status code 204 (No Content) for successful deletion.
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };  

  // Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file.filename; // Multer stores uploaded file in req.file

    const stallProduct = new stallProduct({ name, price,description,image });
    await stallProduct.save();

    res.status(201).json(stallProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
};

//// Get all products
const getAllProducts = async (req, res) => {
  try {
    const stallProducts = await stallProduct.find();
    res.json(stallProducts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
}; 

// Delete a product by ID  
 

module.exports = {
    stallreq,
    stalladminreq,
    deleteStallreq,
    createStall,
    Stalllogin,
    StallOwnerDashboard,
    createProduct,
    getAllProducts,
};
