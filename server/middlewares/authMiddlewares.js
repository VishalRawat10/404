const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
module.exports.authMiddleware = async (req, res, next)=>{
    const token = req.cookies.token|| req.headers?.authorization?.split("");
    
    if (!token) return res.status(403).json({message : "Access denied.", success : false});
    try{
       const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded._id);
    req.user = user;  next();
    }catch(err){
        return res.status(401).json({
            message : "Invalid Token!",
            success : false,
        })
    }
}