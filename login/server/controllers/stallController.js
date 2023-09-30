const Stall = require('../models/stall');

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
 
  const getAllStall = async (req, res) => {
    try {
      const stalls = await Stall.find(); // Retrieve all stalls
      
      return res.json(stalls);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

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
