const Stall = require('../models/stall');
const StallRegister = require ('../models/stallRegister');



const createStall = async (req, res) => {
    try{
       const {stallName, type, amount, mType, fName, lName, phonenumber, email, password, payment} =req.body;
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

      const createStallResult = await StallRegister.create({
        stallName,
        type,
        amount,
        mType,
        fName,
        lName,
        phonenumber,
        email,
        password,
        payment
      })

      return res.json(createStallResult)

    }catch (error) {
        console.log(error)
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

  
 

module.exports = {
    stallreq,
    stalladminreq,
    deleteStallreq,
    createStall
};
