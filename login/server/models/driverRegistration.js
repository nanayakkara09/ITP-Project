const mongoose = require('mongoose');   //import the mongoose package and assign it to some constant variable

const Schema = mongoose.Schema;

//create schema
const delivererSchema = new Schema({

    username : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    mobile : {
        type : Number,
        required : true
    },

    nic : {
        type : Number,
        required : true
    },

    gender : {
        type : String,
        required : true
    },

    province : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

})


//send to database 
const Deliverer = mongoose.model("Deliverer", delivererSchema); //(table name, schema we created)

module.exports = Deliverer; //export the module


//if we dont export we cannot use the routes