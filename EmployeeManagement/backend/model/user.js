const mongoose = require("mongoose");
const path = require("path")
const router = express.Router();
const upload = require("../multer");
router.post("/create-user",upload);

router.post("/create-user", upload.single("file"),async(req,res) =>{
    const {name,email,countryCode,password} = req.body;
    const userEmail = await userInfo.findOne({email});
    if(userEmail){
        return nextTick(new ErrorHandler("user already exists",400));

    }
    const filename = req.file.filename
    const fileUrl = path.join(filename);
    
    const user = {
        name:name,
        email: email,
        countryCode: countryCode,
        phoneNumber: phoneNumber,
        idNumber: idNumber,
        password: password,
        cPassword: cPassword,
        avatar: fileUrl,
        nameA:nameA,
        idnumberA: idNumberA,
        avatarA: fileUrl,
        nameB:nameB,
        idnumberB: idNumberB,
        avatarB: fileUrl,
        nameC:nameC,
        idnumberC: idNumberC,
        avatarC: fileUrl,
        nameD:nameD,
        idnumberD: idNumberD,
        avatarD: fileUrl,

    }
    console.log(user);
})
