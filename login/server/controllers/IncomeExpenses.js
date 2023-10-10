const IncOut = require('../models/IncomeAndExpenses');



const addNew = async (req, res) => {
    const {  inputTypeOne,  inputTypeTwo,  inputTypeThree} = req.body;
  
    try {
      const incomeOutcome = await IncOut.create({
        inputTypeOne,
        inputTypeTwo,
        inputTypeThree,
       
      });
  
      res.json(incomeOutcome);
    } catch (error) {
      // Handle any errors that may occur during database insertion
      console.error(error);
      res.status(500).json({ error: 'Failed to add new input' });
    }
  };

//get all income details

const getAllIncomeDetails = async () => {
  try {
    const incomeDetails = await IncOut.find(); // Assuming 'Income' is your Mongoose model for income details
    
    return incomeDetails;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving income details');
  }
};

module.exports = {
  addNew,
  getAllIncomeDetails,
};
