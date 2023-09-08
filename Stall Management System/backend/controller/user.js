const express = require("express");
const path = require("path");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../model/user");
const router = express.Router();
const cors = require("cors");

router.use(cors());

router.post("/create-user", async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNumber, stallName, cuisineType, agreeToTerms } = req.body;

    // Create a new User document
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      stallName: stallName,
      cuisineType: cuisineType,
      agreeToTerms: agreeToTerms,
    });

    // Save the user to the database
    await newUser.save();

    console.log("User created:", newUser);
    
    // Send the response with a status code and a message
    res.status(201).json({ message: "User created successfully" }, newUser);
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
