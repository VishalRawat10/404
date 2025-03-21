const mongoose = require("mongoose");

module.exports.connectToDb = async ()=>{
    return await mongoose.connect(process.env.MONGOOSE_URL);
}