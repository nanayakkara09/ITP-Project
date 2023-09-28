const Event = require('../models/event'); // Change 'event' to 'EventModel'

const jwt = require('jsonwebtoken');


const addEvent = async (req, res) => {
  try {
    const {  name,
      address,
      phonenumber,
      email,
     Etime,
     date,
     Npeople,
     theme,
     Fneed,
     Extra,
    } = req.body;

    const newEvent = new Event({
      name,
    address,
    phonenumber,
    email,
   Etime,
   date,
   Npeople,
   theme,
   Fneed,
   Extra,
  
    });

    await newEvent.save();
    res.json("Your details have been added successfully!!");
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "Error adding Shipping details", error: err.message });
  }
};
// Function to handle getting all Shippings
const getAllEvent = async (req, res) => {
  try {
    const event = await Event.find();
    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "Error fetching Shipping details", error: err.message });
  }
};

// Function to handle updating a Shipping
const updateEvent = async (req, res) => {
  try {
    let userId = req.params.id;
      
        const {  name,
          address,
          phonenumber,
          email,
         Etime,
         date,
         Npeople,
         theme,
         Fneed,
         Extra,
        } = req.body;

    const updateEvent = {
      name,
      address,
      phonenumber,
      email,
     Etime,
     date,
     Npeople,
     theme,
     Fneed,
     Extra,
    
    };

     await Eventform.findByIdAndUpdate(userId, updateEvent);
    res.status(200).send({ status: "Your details have been successfully updated!!" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "Error updating Shipping details", error: err.message });
  }
};

// Function to handle deleting a Shipping
const deleteEvent = async (req, res) => {
  try {
    const userId = req.params.id;
    await deleteEvent.findByIdAndDelete(userId);
    res.status(200).send({ status: "Shipping details deleted!!!" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "Error deleting Shipping details", error: err.message });
  }
};
module.exports={
  addEvent,
  getAllEvent,
  updateEvent,
  deleteEvent,
}

