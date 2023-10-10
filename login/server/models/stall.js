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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of f8f4ed0aa (Stall Request)
=======
>>>>>>> parent of f8f4ed0aa (Stall Request)
      done:{
            type:Boolean,
            default:false,

      }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of f8f4ed0aa (Stall Request)
=======
>>>>>>> parent of f8f4ed0aa (Stall Request)
=======
>>>>>>> parent of f8f4ed0aa (Stall Request)
=======
>>>>>>> parent of e576844a6 (up)
      
     
})

const StallModel = mongoose.model('Stall', stallSchema)
module.exports = StallModel;