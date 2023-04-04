import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import path, { resolve } from "path";
import session from "express-session";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

// internal import
import errorHandler from "./middlewares/errorHandler.js";
import productRoute from "./routes/product.js";
import userRoute from "./routes/user.js";
import employeeRoute from "./routes/employee.js";
import cloudRoute from "./routes/cloud.js";
import User from "./models/User.js";
import MongoStore from "connect-mongo";

const app = express();

// init middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const __dirname = resolve();
// static folder
app.use(express.static(path.join(__dirname, "/api/public")));

// env config
dotenv.config();

// init env variables
const PORT = process.env.PORT || 8080;

// Api routing
app.use("/api/v1/user", userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/employee", employeeRoute);
app.use("/api/v1/cloud", cloudRoute);

// express error handler
app.use(errorHandler);

// listening server
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at http://localhost:${PORT}`.bgGreen.black);
});
