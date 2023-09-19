

const path = require("path");
const express = require("express");
const router = express.Router();
// const {upload} = require("../multer")// Specify the destination folder for file uploads
const Employee = require('../model/Employee');
const ErrorHandler = require("../utills/ErrorHandler");
const cors = require("cors");

router.use(cors());

// Create a new employee
router.post('/create-employee',  async (req, res) => {
  try{
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

    
    // const filename = req.file.filename;
    // const fileUrl = path.join(filename);
    

   
    const employee ={
      name :name,
      email : email,
      idNumber : idNumber,
      countryCode: countryCode,                                                                                                                                       
      phoneNumber :phoneNumber,
      password : password,
      cPassword :cPassword,
      // avatar : fileUrl,
      
    };

     // Save the user to the database
     await employee.save();

    
console.log(employee);

  // Send the response with a status code and a message
  res.status(201).json({ message: "User created successfully" }, employee);
} catch (error) {
  // Check if the error is a duplicate key error (email already exists)
  if (error.code === 11000) {
    return next(new ErrorHandler("User with this email already exists.", 400));
  }
  console.error("Error creating user:", error);
  next(error); // Pass the error to the error handling middleware
}
  });

module.exports = router;


