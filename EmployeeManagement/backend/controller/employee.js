



// const {upload} = require("../multer");






 // Make sure to adjust the path to your model

// Create a new employee
const path = require("path");
const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder for file uploads

const Employee = require('../model/Employee');

// Create a new employee
router.post('/create', upload.single('avatar'), async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      idNumber,
      phoneNumber,
      cPassword,
      nameA,
      nameB,
      nameC,
      nameD,
      idNumberA,
      idNumberB,
      idNumberC,
      idNumberD,
    } = req.body;

    // Assuming you are storing the file path in the 'avatar' field of the request body
    const avatar = req.file ? req.file.path : ''; // Check if a file was uploaded

    // Create a new employee instance
    const employee = new Employee({
      name,
      email,
      password,
      idNumber,                                                                                                                                       
      phoneNumber,
      cPassword,
      avatar,
      nameA,
      nameB,
      nameC,
      nameD,
      idNumberA,
      idNumberB,
      idNumberC,
      idNumberD,
    });

    // Save the employee to the database
    await employee.save();

    res.status(201).json({ message: 'Employee created successfully', employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

// exports.createEmployee = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       password,
//       idNumber,
//       phoneNumber,
//       cPassword,
//       avatar,
//       nameA,
//       nameB,
//       nameC,
//       nameD,
//       idNumberA,
//       idNumberB,
//       idNumberC,
//       idNumberD,
//       avatarA,
//       avatarB,
//       avatarC,
//       avatarD,
//     } = req.body;

//     // Create a new employee instance
//     const employee = new Employee({
//       name,
//       email,
//       password,
//       idNumber,
//       phoneNumber,
//       cPassword,
//       avatar,
//       nameA,
//       nameB,
//       nameC,
//       nameD,
//       idNumberA,
//       idNumberB,
//       idNumberC,
//       idNumberD,
//       avatarA,
//       avatarB,
//       avatarC,
//       avatarD,
//     });

//     // Save the employee to the database
//     await employee.save();

//     res.status(201).json({ message: 'Employee created successfully', employee });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
// module.exports = router;

// create user
// router.post("/create-employee",upload.single("file") ,async (req, res) => {

//   const { name, email, countryCode,phoneNumber, idNumber,password,cPassword/*,nameA,nameB,nameC,nameD,idNumberA,idNumberB,idNumberC,idNumberD*/} = req.body;
//   const employeeEmail = await Employee.findOne({ email });

//   if (employeeEmail) {
//     const filename = req.file.filename;
//     const filePath = `uploads/${filename}`;

//     fs.unlink(filePath,(err) => {
//       if(err) {
//         console.log(err);
//         res.status(500).json({message: "Error deleting file"});
//       }else{
//         res.status(400).json({ message: "File deleted successfully" });
    
//       }
//     });


//     return next(new ErrorHandler("User already exists", 400));
//   }

//   const filename = req.file.filename;
//   const fileUrl = path.join(filename);


//   const employee = {
//     name: name,
//     email: email,
//     countryCode:countryCode,
//     phoneNumber:phoneNumber,
//     idNumber:idNumber,
//     password: password,
//     cPassword: cPassword,
//     avatar: fileUrl,
//     nameA: nameA,
//     nameB: nameB,
//     nameC: nameC,
//     nameD: nameD,
//     idNumberA:idNumberA,
//     idNumberB:idNumberB,
//     idNumberC:idNumberC,
//     idNumberD:idNumberD,
//     avatarA: fileUrl,
//     avatarB: fileUrl,
//     avatarC: fileUrl,
//     avatarD: fileUrl,

//   };

// const newEmployee = await Employee.create(employee);
// res.status(200).json({
//   sussess: true,
//   newEmployee,
// })
//   });

//   module.exports = router; 
// const path = require("path");
// const express = require("express");
// const router = express.Router();
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
// const ErrorHandler = require("../utills/ErrorHandler");
// // const Employee = require("../models/Employee"); // Import your Employee model
// const fs = require("fs");

// // Create employee
// router.post("/create-employee", upload.array("files", 4), async (req, res, next) => {
//   try {
//     const { 
//       name, 
//       email, 
//       countryCode,
//       phoneNumber, 
//       idNumber, 
//       password, 
//       cPassword, 
//       nameA, 
//       nameB, 
//       nameC, 
//       nameD, 
//       idNumberA, 
//       idNumberB, 
//       idNumberC, 
//       idNumberD 
//     } = req.body;
  
//     const employeeEmail = await Employee.findOne({ email });
  
//     if (employeeEmail) {
//       return next(new ErrorHandler("User already exists", 400));
//     }
  
//     // Handle multiple uploaded files as needed
//     const fileUrls = req.files.map((file) => path.join("uploads", file.filename));
  
//     const employee = {
//       name,
//       email,
//       countryCode,
//       phoneNumber,
//       idNumber,
//       password,
//       cPassword,
//       avatars: fileUrls, // Use an array for multiple files
//       nameA,
//       nameB,
//       nameC,
//       nameD,
//       idNumberA,
//       idNumberB,
//       idNumberC,
//       idNumberD,
//       avatarA: fileUrls[0], // Use the first file URL for avatarA (adjust as needed)
//       avatarB: fileUrls[1], // Use the second file URL for avatarB (adjust as needed)
//       avatarC: fileUrls[2], // Use the third file URL for avatarC (adjust as needed)
//       avatarD: fileUrls[3], // Use the fourth file URL for avatarD (adjust as needed)
//     };
  
//     const newEmployee = await Employee.create(employee);

//     // Delete the temporary uploaded files after processing (assuming it's needed)
//     req.files.forEach((file) => {
//       const filePath = path.join(__dirname, '..', 'uploads', file.filename);
//       fs.unlink(filePath, (err) => {
//         if (err) {
//           console.error("Error deleting file:", err);
//         } else {
//           console.log("File deleted successfully");
//         }
//       });
//     });

//     res.status(200).json({
//       success: true,
//       newEmployee,
//     });
//   } catch (error) {
//     next(error); // Pass the error to Express's error handling middleware
//   }
// });

// module.exports = router;



    