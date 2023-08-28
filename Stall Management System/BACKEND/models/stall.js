const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stallSchema =  new Schema({

    name : {
        type : String,
        required: true
    },

    type : {
        type : String,
        required: true
    },

    fname : {
        type : String,
        required: true
    },

    lname : {
        type : String,
        required: true
    },

    email : {
        type : String,
        required: true
    },

    phone : {
        type : Number,
        required: true
    }

})

const Stall = mongoose.model("Restuarent",stallSchema);

module.exports = Stall;
