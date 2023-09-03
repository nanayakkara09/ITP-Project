const express = require("express");
const path = require("path");
const User =require("../model/user");
const router = express.Router();
const {upload} = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");

router.post("/create-user",upload.single("file"), async (req,res,next) =>{
    const {fname,lname,email,phone,stallname,type} = req.body;
      const userEmail = await User.findOne({email});

      if(userEmail){
        return next(new ErrorHandler("User alredy exists", 400));

      }
      const filename = req.file.filename;
      const fileUrl = path.join(filename);
        

      const user = {
        firstname,
        lastname,
        email,
        password,
        phone,
        stallname,
        type,
        avatar: fileUrl,
      }; 
      
      console.log(user);
})

module.exports = router;