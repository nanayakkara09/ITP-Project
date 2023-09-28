const Event = require('../models/event'); // Change 'event' to 'EventModel'



const test=(req,res) =>{
  res.json('test is working')
}
const addNew=async(req,res)=>{
  const{name,
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

const event=await Event.create({name,
  address,
  phonenumber,
  email,
 Etime,
 date,
 Npeople,
 theme,
 Fneed,
 Extra,

})  
return res.json(event)}

const updateItem=async(req,res)=>{
  const { itemId } = req.params;
  console.log(itemId);
  console.log(req.body)
  const{name,
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

  const event = await Event.findByIdAndUpdate(
    itemId,
    {
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

  }
  );
  return res.json(inventory)
}
const deleteItem=async(req,res) =>{
  const { itemId } = req.params;
  try {
      const event = await Event.findByIdAndRemove(itemId);
      if (!event) {
        return res.json({
            error:'No Item found'
        })
      }
  
      res.json({ message: 'Item deleted' });
    } catch (error) {
      console.log(error);
   
    }
  }
  const getAllItems = async (req, res) => {
    try {
      const items = await Event.find();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching inventory items' });
    }
  };
  const getItem = async (req, res) => {
    try {
        console.log(req.params.itemId)
      const items = await Event.findById(req.params.itemId);
      res.json(items);
      console.log(req.itemId);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching inventory items' });
    }
  };
module.exports ={
    addNew,
    getAllItems,
    getItem,
    updateItem,
    deleteItem
}