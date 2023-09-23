const event =require('../models/event');



const event =(req, res)=>{
  res.json('test is working')
}
const eventUpdate =async (req,res)=>{
  try{
      const{name, phonenumber, email, Ename, Etime, date, Npeople, theme, Fneed, Extra}=req.body;
 //check if name is entererd
 if(!name){
  return res.json({
    error:'name is required'
  })
 };
 

 //email
 const exsit=await event.findOne({email});
 if(exsit){
  return res.json({
    error:'email is taken already'
  })
 }
 const event = await event.create({
  name, phonenumber, email, Ename, Etime, date, Npeople, theme, Fneed, Extra

 })
 return res.json(event)
 
    }catch(error){
      console.log(error)
  }
}
module.exports={
  event,
  eventUpdate,
}