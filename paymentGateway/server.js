const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {

})

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("Mongodb connection is success!!!!");
})

const paymentRouter = require("./routes/Payments.js");

app.use("/payment", paymentRouter);



app.listen(PORT, ()=>{
    console.log(`server in running on port: ${PORT}`);
})


