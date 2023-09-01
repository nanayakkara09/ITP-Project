const router = require("express").Router();

const Payment = require("../models/payment");
let payment = require("../models/payment");

//http://localhost:8070/payment/

router.route("/add").post((req,res)=>{

    const AccHoldName = req.body.AccHoldName;
    const BankNme = req.body.BankNme;
    const Date = req.body.Date;
    const message = req.body.message;

    const newPayment = new payment({

        AccHoldName,
        BankNme,
        Date,
        message
    
    })
//passing data to a database through student module from newStudent object
    newPayment.save().then(()=>{
         //if it is successfully inserted this message will show
        //send response from json method
        res.json("Your details have been added successfully!!");
    }).catch((err)=>{
        console.log(err);
    })

})
//http://localhost:8070/payment
//display
//take details of students
//if we fetch all student we use only ("/")
router.route("/").get((req,res)=>{
    //if we want get details from database and display //use FIND method
    payment.find().then((Payments)=>{
        res.json(Payments)
    }).catch((err)=>{
        console.log(err)
    })
})

//http://localhost/payment/update/id
//update
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;

    const {AccHoldName, BankNme, Date, message} = req.body;

    const updatePayment = {
        AccHoldName,
        BankNme,
        Date,
        message
    }
    
    const update = await payment.findByIdAndUpdate(userId, updatePayment).then(()=>{
        res.status(200).send({status: "Your have been successfull updated!!"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updated user details!", error: err.message});
        
    })

})  

//http://localhost/delete/id
//delete
router.route("/delete/:id").delete(async(req,res)=>{

    let userId = req.params.id;

    await payment.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User details deleted!!!"});

    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleted user details", error: err.message})
    })

})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.Id;

    const user = await payment.findById(userId)
    .then((payment)=>{
        res.status(200).send({status:"Details fetched!!!", payment})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "error with fetched details", error: err.message})
    })
})

module.exports = router;