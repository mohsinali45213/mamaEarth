import jwt from "jsonwebtoken";
import User from "../models/users.models";

const authCheck = async (req,res,next)=>{
  try {
    const token = req.cookies.jwt
    const verifyToken  = jwt.verify(token,process.env.SECRET_KEY)

    const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})

    if(!rootUser){throw new error("User not Found")}
    req.token=token
    req.rootUser = rootUser
    req.UserId = rootUser._id

    
  } catch (error) { 
    res.status(401).json({error:"Unauthorize user"})
    console.log(error);
  }
}

const adminCheck = async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email }).exec();
  if (adminUser.role !== 'admin') {
    res.status(403).json({
      err: 'Not authorized to access this resource',
    });
  } else {
    next();
  }
};

export {
  authCheck,adminCheck
}