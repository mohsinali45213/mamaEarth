import mongoose from "mongoose";


const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`);
    console.log("MongoDB :: Connect Successful.....");
  } catch (error) {
    console.log("MongoDB Not Connected");
  }
};

export default connectDB