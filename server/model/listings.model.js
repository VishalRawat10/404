const {model, Schema} = require("mongoose");

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
        unique: true,
    },
    description : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    category: {
        type : String,
        required: true
    },
    otherImgs : {
        type : [String]
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true,
    }
});

module.exports = model("Listing", listingSchema);