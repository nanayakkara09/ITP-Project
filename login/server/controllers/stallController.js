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

async function addFoodItemToStall(name, description, price, image) {
    // Add logic here to update the stall data with the new food item
    // For example, you can use your MongoDB Stall model and the Mongoose library
    // to update the stall's foodItems array with the new item.
  
    // Sample code (assuming you have a Stall model):
    // const stall = await Stall.findOne({ _id: stallId });
    // stall.foodItems.push({ name, description, price, image });
    // await stall.save();
    // return stall;
  }



module.exports = {
    stallreq,
    addFoodItemToStall,
};
