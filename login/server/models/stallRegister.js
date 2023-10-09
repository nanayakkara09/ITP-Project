const mongoose = require('mongoose')
const {Schema} = mongoose

const stallRegisterSchema = new Schema ({
    stallName: String,
    type: String,
    amount: String,
    mType: String,
    stallId: String,
    fName: String,
    lName: String,
    phonenumber: Number,
    email: {
        type: String,
        unique: true
    },
    password: String,
    payment: String
});

const stallRegisterModel = mongoose.model('StallReg', stallRegisterSchema)
module.exports =  stallRegisterModel;
