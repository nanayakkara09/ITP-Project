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

  module.exports = {
    addNew,
  }