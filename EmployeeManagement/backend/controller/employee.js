

const path = require("path");
const express = require("express");
const router = express.Router();
const {upload} = require("../multer")// Specify the destination folder for file uploads
const Employee = require('../model/Employee');
const ErrorHandler = require("../utills/ErrorHandler");

// Create a new employee
router.post('/create-employee', upload.single('file'), async (req, res) => {
    const {
      name,
      email,
      idNumber,
      countryCode,
      phoneNumber,
      password,
      cPassword,
      
    } = req.body;
    const employeeEmail = await Employee.findOne({email});

    if(employeeEmail){
      return next(new ErrorHandler("User already exists",400))
    }

    
    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    

   
    const employee ={
      name :name,
      email : email,
      idNumber : idNumber,
      countryCode: countryCode,                                                                                                                                       
      phoneNumber :phoneNumber,
      password : password,
      cPassword :cPassword,
      avatar : fileUrl,
      
    };

    
console.log(employee);
  })

  module.exports = router;


