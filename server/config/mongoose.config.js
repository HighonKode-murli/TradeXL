import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


async function dbConnect() {
  // MongoDB Connection
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Trades",
    });
    console.log("Successfully connected to MongoDB.")
  } catch (error){
        console.log(error);
        throw error;
  }
}

export default dbConnect