import User from "../models/users.models.js";
import bcrypt from "bcryptjs";

//registration
const registerUser = async (req, res) => {
  try {
    const { username, email, password, role, phone, userImage } = req.body;

    if (!username || !email || !password || !phone) {
      return res.status(400).send({ error: "All Field are require" });
    }
    const emailExist = await User.findOne({ email });

    if (emailExist) {
      return res.send({ error: "Email already exist" }).status(400);
    } else {
      const user = new User({
        username,
        email,
        password,
        role,
        phone,
        userImage,
      });
      await user.save();
      res.send({ success: "Register Successful..." }).status(201);
    }
  } catch (error) {
    console.log("server error", error);
  }
};

//login
const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    password = password.toString();
    if (!email || !password) {
      res.send({ error: "Invalid login detail" });
    }
    const userLogin = await User.findOne({ email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      //token
      const token = await userLogin.generateAuthToken();

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid login detail" });
      } else {
        res.json({userLogin});
      }
    } else {
      res.status(400).json({ error: "Invalid login detail" });
    }
  } catch (error) {
    console.log(error);
  }
};

//Upload user Image

const profileImage = async (req, res) => {
  try {
    const filename = req.file.originalname;

    const userId = req.params.id;
    const user = await User.findById(userId);

    user.userImage = filename;
    await user.save();

    res.json({ message: "Image uploaded successfully!", filename });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUser =async(req,res)=>{
  try {
    const user = await User.find({})
    // console.log(user);
    res.json(user)
    console.log("User Get Successful...");
  } catch (error) {
    // res.json({error:"Not get user"}).status(404)
    console.log("User Is not Get",error);
    
  }
}

const getSingleUser = async(req,res)=>{
  try{
    const user=await User.findById(req.params.id)
    res.json(user)
    console.log("Success...");
  }
  catch(error){
    console.log("UnSuccess...",error);
  }
}

export { registerUser, loginUser ,profileImage,getUser,getSingleUser};
