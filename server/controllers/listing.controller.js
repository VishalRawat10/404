const {validationResult} = require("express-validator");
const User = require("../model/listings.model");

const Listing = require("../model/listings.model");

// show
module.exports.show = async(req, res)=>{
    try{
        const listings = await Listing.find({});
        res.status(200).json({
            success : true,
            listings
        })
    }catch(err){
        console.log(err);
        res.status(500).json({message : "Internal server error!", success : false});
    }
}

//create
module.exports.create = async (req, res)=>{
    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).json({ message : result.errors, success : false});
    }
    const { title, description, image, price, category } = req.body;
    try{
        const listing = new Listing({
        title,
        description,
        image,
        price,
        category,
        owner : req.user._id,
    });
    await listing.save();
    res.status(200).json({ message : "Listing created successfully.", success : true});
}
    catch(err){
        console.log(err);
        res.status(500).json({ message : "Internal server error!", success : false});
    }
}

//show
module.exports.showListing  = async(req, res)=>{
    const { id } = req.params;
    try{
        const listing = await Listing.findById(id);
        const owner = await User.findById(listing.owner);
        if(!listing){
            return res.status(400).json({message : "Listing does not exist!" , success : false});
        }
        res.status(200).json({ listing, success : true});
    }catch(err){
        console.log(err);
        res.status(500).json({ message : "Internal server error!" , success : true});
    }
}

// edit
module.exports.editListing = async (req, res)=>{
    
}