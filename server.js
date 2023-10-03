import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/dbConnection.js";

dotenv.config();
const app = express();
connectDB();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(errorHandler);
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes)

app.listen(port,  () => {
    console.log(`Server is running on the port ${port}`)
});