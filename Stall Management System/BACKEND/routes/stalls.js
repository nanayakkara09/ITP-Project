const router = require("express").Router();
let Stall = require("../models/stall");

router.route("/add").post((req,res)=> {

    const name = req.body.name;
    const type = req.body.type;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const phone = req.body.phone;

    const newStall = new Stall({
        name,
        type,
        fname,
        lname,
        email,
        phone
    })

    newStall.save().then(()=>{
        res.json("Stall Added")
    }).catch((err)=> {
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    Stall.find().then((stalls)=>{
        res.json(stalls)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) => {
    let userId =req.params.id;
    const {name, type, fname, lname, email, phone} = req.body;

    const updateStall = {
        name,
        type,
        fname,
        lname,
        email,
        phone
    }

    const update = await Stall.findByIdAndUpdate(userId,updateStall).then(() =>{
       res.status(200).send({status: "User updated"}) 
    }).catch((err) => {
       console.log(err);
       res.status(500).send({status: "Error with updating data"});
    })
  
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Stall.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User deleted"});

    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    await Stall.findById(userId)
    .then((stall) => {
        res.status(200).send({status: "User fetched", stall})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;