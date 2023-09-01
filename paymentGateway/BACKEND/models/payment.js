const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paymentSchema = new Schema({

    AccHoldName:{
        type: String,
        required: true
    },
    BankNme:{
        type: String,
        required: true
    },
    Date:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})

const Payment = mongoose.model("Payment", paymentSchema );

module.exports = Payment;