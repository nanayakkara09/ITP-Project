const express = require("express");
// const path = require("path");
const ErrorHandler = require("../utils/ErrorHandler");
const Employee = require("../model/employee");
const router = express.Router();
const cors = require("cors");
// const jwt = require("jsonwebtoken");
// const sendMail = require("../utils/sendMail");


router.use(cors());

router.post("/create-employee", async (req, res, next) => {
  try {
    const { name, email, countryCode, phoneNumber, idNumber, password, cPassword } = req.body;
    const employeeEmail = await Employee.findOne({ email });

    if (employeeEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }

    // Create a new User document
    const employee = {
      name :name,
      email : email,
      countryCode: countryCode,                                                                                                                                       
      phoneNumber :phoneNumber,
      idNumber : idNumber,
      password : password,
      cPassword :cPassword,
    }

    const newEmployee = await Employee.create(employee);
    res.status(201).json({
      success: true,
      newEmployee,
    });
    // Save the user to the database
    // const activationToken = createActivationToken(employee);

    // const activationUrl = `https://eshop-tutorial-pyri.vercel.app/activation/${activationToken}`;

    // try {
    //   await sendMail({
    //     email: employee.email,
    //     subject: "Activate your account",
    //     message: `Hello ${employee.name}, please click on the link to activate your account: ${activationUrl}`,
    //   });
    //   res.status(201).json({
    //     success: true,
    //     message: `please check your email:- ${employee.email} to activate your account!`,
    //   });
      
    // } catch (error) {
    //   return next(new ErrorHandler(error.message, 500));
    // }
    

  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
    
    // Send the response with a status code and a message
    
});

// create activation token
// const createActivationToken = (employee) => {
//   return jwt.sign(employee, process.env.ACTIVATION_SECRET, {
//     expiresIn: "5m",
//   });
// }


module.exports = router;

