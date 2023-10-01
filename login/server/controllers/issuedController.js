const IssuedDetails =require('../models/issued');


const issueEntry=async(req,res) =>{
    const{date,itemName,quantity,price,itemCode,stoleid}=req.body;

    const issuedDetails=await IssuedDetails.create({
        date,
        itemName,
        quantity,
        price,
        itemCode,
        stoleid
    })
    
        
        
    




    return res.json(issuedDetails)
}
/* const getAllItemDetails = async (req, res) => {
    try {
        const { itemcode } = req.params; // Assuming the item code is passed as a parameter in the URL
        console.log(itemcode)
    const items = await InvDetails.find({ itemcode: itemcode });
     
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching item details' });
    }
  }; */
module.exports ={
    issueEntry,
    //getAllItemDetails
}