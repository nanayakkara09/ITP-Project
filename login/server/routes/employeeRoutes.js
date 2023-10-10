const express = require('express');
const router = express.Router();
const cors = require('cors');
const multer = require('multer'); // Import Multer
const path = require('path');
const fs = require('fs');
const {
  createEmployee,
  getEmployee,
  getEmployeeProfile,
  getEmployeeId,
  updateEmployee,
  getEmployeeEId,
  deleteEmployee,
  loginEmployee,
  createEmployeeShift,
  getEmployeeShift,
  getEmployeeShiftId,
  updateEmployeeShift,
  completeEmployeeShift,
  deleteEmployeeShift,
  createEmployeeLeave,
  getEmployeeLeave,
  deleteEmployeeLeave,
  completeEmployeeLeave,
  createEmployeeContact,
  getEmployeeContact,
  createEmployeeNews,
  getEmployeeNews,
  deleteEmployeeNews,
  createEmployeeSalary,
  getEmployeeSalary,
  deleteEmployeeSalary
  
  

} = require('../controllers/employeeController');

// Middleware
router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173', // Change to your React app's origin
  })
);

// Define Multer storage and file naming
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the destination folder for uploaded profile photos
    const uploadPath = path.join(__dirname, '..', 'uploads', 'profile-photos');
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    // Define the file name for the uploaded profile photo (you can customize this)
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Create an upload instance with Multer
const upload = multer({ storage: storage });

// Route for creating an employee with profile photo upload
router.post('/createEmployee', upload.single('profilePhoto'), createEmployee);
router.get('/getEmployee',getEmployee);
router.get('/getEmployee/:id', getEmployeeId);
router.post('/updateEmployee/:id', updateEmployee);
router.post('/loginEmployee',loginEmployee);
router.delete('/deleteEmployee/:id', deleteEmployee);
router.get('/getEmployeeProfile',getEmployeeProfile);
router.get('/getEmployeeE/:id', getEmployeeEId);


router.post('/createEmployeeShift', createEmployeeShift);
router.get('/getEmployeeShift', getEmployeeShift);
router.get('/getEmployeeShift/:id', getEmployeeShiftId);
router.put('/completeEmployeeShift/:id', completeEmployeeShift);
router.post('/updateEmployeeShift/:id', updateEmployeeShift);
router.delete('/deleteEmployeeShift/:id', deleteEmployeeShift);

router.post('/createEmployeeLeave', createEmployeeLeave);
router.get('/getEmployeeLeave',getEmployeeLeave);
router.delete('/deleteEmployeeLeave/:id', deleteEmployeeLeave);
router.put('/completeEmployeeLeave/:id', completeEmployeeLeave);

router.post('/createEmployeeContact', createEmployeeContact);
router.get('/getEmployeeContact',getEmployeeContact);

router.post('/createEmployeeNews', createEmployeeNews);
router.get('/getEmployeeNews',getEmployeeNews);
router.get('/deleteEmployeeNews',deleteEmployeeNews);

router.post('/createEmployeeSalary', createEmployeeSalary);
router.get('/getEmployeeSalary', getEmployeeSalary);
router.delete('/deleteEmployeeSalary/:id', deleteEmployeeSalary);



module.exports = router;
