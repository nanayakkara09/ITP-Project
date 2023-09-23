const express= require('express');
const dotenv = require('dotenv').config()
const cors=require('cors')
const {mongoose}=require('mongoose')
const app=express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

//database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('database connected'))
.catch((err)=> console.log('database not connected',err))

//middleware
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))


app.use(
    session({
      secret: 'Naduka0916',
      resave: false,
      saveUninitialized: false,
    })
  );

app.use('/',require('./routes/authRoutes'))
app.use('/inventory',require('./routes/invRoutes'))


const port=8000;
app.listen(port,()=> console.log(`Listening on port ${port}`))