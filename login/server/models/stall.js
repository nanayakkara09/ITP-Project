const mongoose = require('mongoose')
const {Schema} = mongoose


const stallSchema = new Schema({
      sName: String,
      type:String,
      fName: String,
      lName: String,
      email: String,
      phone: Number,
<<<<<<< HEAD
=======
      done:{
            type:Boolean,
            default:false,

      }
>>>>>>> parent of f8f4ed0aa (Stall Request)
      
     
})

const StallModel = mongoose.model('Stall', stallSchema)
module.exports = StallModel;