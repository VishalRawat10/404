const {validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const User = require("../model/user.model");

//signup
module.exports.signup = async (req, res, next)=>{
    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).json(result.array());
    }

    const {fullname, email, password } = req.body;
    const user = await User.findOne({email});

    if(user){
        return res.status(400).json({
            message : "Email is already associated to an account.",
            success : false,
        });
    }
    try{
       const hashPassword = await bcrypt.hash(password, 10); 
       const newUser = new User({
        fullname,
        email,
        password : hashPassword
       });
       await newUser.save();
       const token =jwt.sign({_id : newUser._id}, process.env.JWT_SECRET_KEY, {
        expiresIn : "2 days"
       });
       res.cookie("token", token,{
            maxAge : 2 * 60 * 24*60*1000,
            httpOnly : true
       });
       res.status(200).json({message : "Signed Up succcessfully!", user : newUser, success : true });
    }catch(err){
        console.log(err);
        res.status(500).json({message : "Internal Server Error!", error : err.message, success : false});
    }   
}

//login
module.exports.login = async (req, res, next)=>{
    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).json({message : result.array(), success : false});
    }
    const {email, password } = req.body;
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return res.status(400).json({message : "User does not exist."});
    }

    try{
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message : "Invalid password or email!",
                success : false,
            });
        }
       const token =jwt.sign({_id  : user._id},process.env.JWT_SECRET_KEY);
       res.cookie("token", token, {
        maxAge : 2 * 60 * 24*60*1000,
        httpOnly : true
   });
        res.status(200).json({message : "User logged in successfully.", success : true, user});
    }catch(err){
        console.log(err);
        res.status(500).json({ message : "Internal server error.", success : false})
    }
}

// logout 
module.exports.logout= async (req, res)=>{
    res.clearCookie("token");
    return res.status(200).json({message : "Logged out successfully.", success : true});
}