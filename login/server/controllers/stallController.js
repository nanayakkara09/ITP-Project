const Stall = require('../models/stall');
const stallReg = require('../models/stallRegister');
const PaymentSuccess = require('../models/paymentSuccessStall');
const test = (req, res) => {
    res.json('test is working');
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
  
      const stall = await stallReg.findById(stallId);
  
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
      const stalls = await stallReg.find(); // Retrieve all stalls
      
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
      const deletedStall = await stallReg.findByIdAndDelete(id);
  
      if (!deletedStall) {
        return res.status(404).json({ message: 'Stall not found' });
      }
  
      res.sendStatus(204); // Send a successful response with status code 204 (No Content) for successful deletion.
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  // Create a controller function to add the details to the database
const addSuccessDetails = async (req, res) => {
  try {
    const {
      stallName,
      type,
      amount,
      mType,
      stallId,
      fName,
      lName,
      phonenumber,
      email,
      password,
      payment,
    } = req.body;
    // Create a new instance of the SuccessModel
    const successDetails = new PaymentSuccess({
      stallName,
      type,
      amount,
      mType,
      stallId,
      fName,
      lName,
      phonenumber,
      email,
      password,
      payment,
    });

    // Save the details to the database
    await successDetails.save();

    // Respond with a success message or the saved document
    res.status(201).json(successDetails);
  } catch (error) {
    // Handle errors, e.g., validation errors or database errors
    res.status(500).json({ error: 'Failed to add details to the database' });
  }
};
//Get all stall details 
const getAllPayments = async (req, res) => {
  try {
    const successPayment = await PaymentSuccess.find(); // Retrieve all stalls
    
    return res.json(successPayment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateStallStatusSuccess = async (req, res) => {
  try {
    const { id } = req.params;
    const stall = await PaymentSuccess.findById(id);

    if (stall) {
      console.log(stall);
      stall.payment = 'success';

      const updatedStall = await stall.save();
      console.log("Stall data updated successfully.");
      return res.json(updatedStall);
    } else {
      console.log("Stall not found.");
      return res.status(404).json({ message: 'Stall not found' });
    }
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
    addSuccessDetails,
    getAllPayments,
    updateStallStatusSuccess,
 
};
          