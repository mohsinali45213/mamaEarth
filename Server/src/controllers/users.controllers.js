import User from "../models/users.models.js";
import bcrypt from "bcryptjs";
import uploadOnCloudinary from "../utils/Cloudinary.js";

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
        userImage:
          "http://res.cloudinary.com/mohsin45213/image/upload/v1707751609/ppexer6xoyaocmnwajr5.png",
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

      if (!isMatch) {
        res.status(400).json({ error: "Invalid login detail" });
      } else {
        const token = await userLogin.generateAuthToken();

       res.cookie("jwt", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        res.json({userId:userLogin._id,token}  );
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
    // const filename = req.file.originalname;
    const userId = req.params.id;
    const result = await uploadOnCloudinary(req.file.path);
    const user = await User.findById(userId);
    const url = result.url;
    user.userImage = result.url;
    await user.save();

    res.json({ message: "Image uploaded successfully!", url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find({});
    // console.log(user);
    res.json(user);
    console.log("User Get Successful...");
  } catch (error) {
    // res.json({error:"Not get user"}).status(404)
    console.log("User Is not Get", error);
  }
};

const getSingleUser = async (req, res) => {
  try {
   if (req.params.id!==undefined) {
    const user = await User.findById(req.params.id) 
    console.log("Success...");
    res.json(user)
   }
  } catch (error) {
    console.log("UnSuccess...", error);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    console.log("User is not update");
  }
};

const logoutUser = async (req, res) => {
  console.log(req.params.id);
  if (req.params.id !== null) {
      const user = await User.findById(req.params.id);
      user.tokens = []
    // const { tokens } = user;
    // user.tokens = tokens.filter((item) => item.token != req.cookies.jwt);
    await user.save();
    console.log(req.cookies.jwt);
    res.clearCookie("jwt").json({ message: "Logout successful..." });
  }
};


export {
  registerUser,
  loginUser,
  profileImage,
  getUser,
  getSingleUser,
  updateUser,
  logoutUser,
};
