const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config()
const {mongoose} = require('mongoose');
const User = require('./models/User')


app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3001",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
    res.json("Test Works");
  });

  app.post('/register' , async (req, res) => {
    const{ stallname, type,password,firstName,lastName,email,phone,cardtype,cardNumber,expireYear,expireMonth,cvn } = req.body
    try{
       const userInfo = await User.create ({
        stallname,
        type,
        password,
        firstName,
        lastName,
        email,
        phone,
        cardtype,
        cardNumber,
        expireYear,
        expireMonth,
        cvn
       })
       res.json(userInfo)
    }catch (error) {
      res.status(422).json(error)  
    }
  })

  app.listen(4000)