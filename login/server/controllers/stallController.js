const Stall = require('../models/stall');
const StallRegister = require ('../models/stallRegister');
const {hashPassword,comparePassword}=require('../helpers/stall')
const jwt = require('jsonwebtoken');
const stallProduct = require('../models/stallProduct');
const stallPromo = require('../models/stallPromotions');
const Ticket = require('../models/ticket');

const createStall = async (req, res) => {
    try{
       const {stallName, type, amount, mType,description, stallId, fName, lName, phonenumber, email, password, payment} = req.body;
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
        description,
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

  //Create Product
  const createProduct = async (req, res) => {
    try{
       const {name,price,description} = req.body;      

        
      const createProductResult = await stallProduct.create({
        name,
        price,
        description,
        
      })

      return res.json(createProductResult)

    }catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error creating Product' });
    }

} ;
  
  

//get products
const getProduct = async (req, res) => {
  try {
    const getProductResult = await stallProduct.find();
    return res.json(getProductResult );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

//delete products
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    // Use Mongoose to delete the product by ID
    await stallProduct.findByIdAndDelete(id);
    res.sendStatus(204); // Send a successful response with status code 204 (No Content) for successful deletion.
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const {id} = req.params.id;
    await stallProduct.findByIdAndUpdate(id);
    res.status(200).json({ message: 'Update successful' });
  } catch (err) {
    console.error('Error updating data:', err);
    res.status(500).json({ error: 'Could not update data' });
  }
};

const createdStall = async (req, res) => {
  try {
    const stall = await StallRegister.find();
    return res.json(stall);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createdStalls = async (req, res) => {
  try {
    const stall = await StallRegister.find();
    return res.json(stall);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createPromotion = async (req, res) => {
  try{
     const {text,imageURL} = req.body;         
    const createPromotion = await stallPromo.create({
      text, 
      imageURL     
    })
    return res.json(createPromotion)

  }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error creating Promotion' });
  }

} ;

const getPromotion = async (req, res) => {
  try {
    const promotions = await stallPromo.find();
    res.json(promotions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

const createTicket = async (req, res) => {
  try{
     const {subject, description, stallOwnerId} = req.body;         
    const createTicket = await Ticket.create({
      subject,
      description,
      status: 'Open',
      stallOwnerId,    
    });
    return res.json(createTicket);

  }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error creating Promotion' });
  }

} ;

const getTicket = async (req, res) => {
  try {
    const getTicket = await Ticket.find();
    res.json(getTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


module.exports = {
    stallreq,
    stalladminreq,
    deleteStallreq,
    createStall,
    Stalllogin,
    StallOwnerDashboard,
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct,
    createdStall,
    createdStalls,
    createPromotion,
    getPromotion,
    createTicket,
    getTicket,
};
          