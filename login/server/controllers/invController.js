const Inventory =require('../models/inventory');

const test=(req,res) =>{
    res.json('test is working')
}
const addNew=async(req,res) =>{
    const{name,description,quantity,category,reorder,itemcode}=req.body;

    const inventory=await Inventory.create({
        name,
        description,
        quantity,
        category,
        reorder,
        itemcode
    })

    return res.json(inventory)
}
module.exports ={
    addNew,
    test
}