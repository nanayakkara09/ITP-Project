
const multer = require('multer');
const path = require('path');

// Define storage for avatars
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set the destination folder where avatars will be stored
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split(".")[0];
    cb(null,filename + "-" + uniqueSuffix + ".png")
  },
});



exports.upload = multer({storage: storage});



