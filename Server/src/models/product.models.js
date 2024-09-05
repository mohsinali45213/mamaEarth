import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 55,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    about:{
     type:String,
    },
    info:{
      type:String
    },
    description: {
      type: String,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 5,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    subs: {
      type: ObjectId,
      ref: "SubCategory",
    },
    status:{
      type:String,
      enum:["Active","Disable"]
    },
    quantity: Number,
    // sold: {
    //   type: Number,
    //   default: 0,
    // },
    images: {
      type: Array,
    },
    // shipping: {
    //   type: String,
    //   //  enum: ["Yes", "No"],
    // },
    // ratings: {
    //   type: [
    //     {
    //       star: Number,
    //       postedBy: { type: ObjectId, ref: "User" },
    //     },
    //   ],
    // },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
