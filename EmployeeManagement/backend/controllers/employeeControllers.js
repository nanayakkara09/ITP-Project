// userController.js
const Employee = require('../models/employee');

exports.registerUser = async (req, res) => {
  try {
    const { 
        email,
      name,
      nameA,
      nameB,
      nameC,
      nameD,
      password,
      avatar,
      avatarA,
      avatarB,
      avatarC,
      avatarD,
      phoneNumber,
      countryCode,
      idNumber,
      idNumberA,
      idNumberB,
      idNumberC,
      idNumberD,
     } = req.body;

    // Check if a user with the same email already exists (you should implement this logic)
    const existingUser = await Employee.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create a new user in the database
    const newEmployee = new Employee({
        email,
        name,
        nameA,
        nameB,
        nameC,
        nameD,
        password, // Note: Be sure to hash the password before saving it in production
        avatar,
        avatarA,
        avatarB,
        avatarC,
        avatarD,
        phoneNumber,
        countryCode,
        idNumber,
        idNumberA,
        idNumberB,
        idNumberC,
        idNumberD,
      // Add more fields as needed
    });

    // Save the new user to the database
    await newEmployee.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
