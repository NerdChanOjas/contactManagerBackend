import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected at: ", connect.connection.host, connect.connection.name);
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
};

export default connectDB;