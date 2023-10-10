const Stall = require('../models/stall');

<<<<<<< HEAD
const test = (req, res) => {
    res.json('test is working');
=======

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
>>>>>>> parent of 57f6d443e (Stall Registration Payment default value)
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

  //Get stall details by id
  const getStall = async (req, res) => {
    try {
      const stallId = req.params.id; // Get the ID from the request parameters
  
      const stall = await Stall.findById(stallId);
  
      if (!stall) {
        return res.status(404).json({ error: 'Stall not found' });
      }
  
      return res.json(stall);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
 //Get all stall details 
  const getAllStall = async (req, res) => {
    try {
      const stalls = await Stall.find(); // Retrieve all stalls
      
      return res.json(stalls);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
 //Delete stall details by id   
  const deleteStall = async (req, res) => {
    try {
      const { id } = req.params;
      // Use Mongoose to delete the stall by ID
      const deletedStall = await Stall.findByIdAndDelete(id);
  
      if (!deletedStall) {
        return res.status(404).json({ message: 'Stall not found' });
      }
  
      res.sendStatus(204); // Send a successful response with status code 204 (No Content) for successful deletion.
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

module.exports = {
    stallreq,
    stalladminreq,
    deleteStallreq,
    getStall,
    getAllStall,
    deleteStall,
};
          