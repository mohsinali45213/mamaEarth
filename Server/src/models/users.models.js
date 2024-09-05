import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Username Is Require"],
    },
    email: {
      type: String,
      unique: true,
      require: [true, "Email Is Require"],
      lowercase: true,
      trim: true,
      validator: () => {
        return validator.isEmail(this.email);
      },
    },
    password: {
      type: String,
      require: [true, "Password Is Require"],
    },
    role: {
      type: String,
      default:"User"
    },
    phone: {
      type: Number,
      require: [true, "Number Is Require"],
      validate: {
        validator: (value) => {
          return value.toString().length === 10;
        },
        message: "Phone number must be exactly 10 digits.",
      },

    },
    userImage: {
      type: String,
    },
    address: {
      fname: String,
      lname: String,
      email: String,
      number: String,
      address: String,
      state: String,
      city: String,
      pincode: String,
    },
    tokens: [
      {
        token: {
          type: String,
          require: true,
        },
      },
    ],
  },
  { timestamps: true }
);

//password hashing
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

//token generate
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
    this.tokens = this.tokens.concat({token})
    await this.save()
    return token
  } catch (error) {
    console.log(error)
  }
}

const User = mongoose.model("User", userSchema);
export default User;


