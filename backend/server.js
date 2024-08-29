import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDatabase.js";
dotenv.config();

import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
  connectDB();
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
