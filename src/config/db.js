import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

// mongodb url for connect
const uri = process.env.DATABASE_URL;

// database connection
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Data connect sucessfully');
  } catch (error) {
    console.log(error.message, 'data base not connected');
  }
};

export default connectDB;