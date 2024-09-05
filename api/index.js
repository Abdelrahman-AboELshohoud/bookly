import express from "express";

import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

app.use(cookieParser());

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
mongoose
  .connect(process.env.MONGO_LINK)
  .then(() => {
    console.log("hi");
  })
  .catch((err) => console.log(err));
app.listen(8000, (req, res) => {
  console.log("Connected");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
