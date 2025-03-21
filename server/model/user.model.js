const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
        select: false
    }
},{timestamps:true});

module.exports = mongoose.model ("user", userSchema);