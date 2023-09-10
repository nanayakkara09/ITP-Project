// const multer = require("multer")

// const storage = multer.diskStorage({
//     destination: function(req,res,cb){
//         cb(null,"upload/");
//     },
//     filename: function(req,file,cb){
//         const uniqueSuffix = date.now() + "-" + Math.round(Math.random() + le9);
//         const filename = file.originalname.split(".")[0];
//         cb(null,filename + "-" + uniqueSuffix + ".png")
//     }
// });
// 
const multer = require('multer');
const path = require('path');

// Define storage for avatars
const avatarStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/avatars'); // Set the destination folder where avatars will be stored
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

// Define storage for avatar variations (avatarA, avatarB, etc.)
const variationStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/avatar_variations'); // Set the destination folder where variations will be stored
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

// Create Multer instances
const avatarUpload = multer({ storage: avatarStorage });
const variationUpload = multer({ storage: variationStorage });

module.exports = { avatarUpload, variationUpload };



