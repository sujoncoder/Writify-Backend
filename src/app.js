import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRouter from "./routes/auth.route.js";

// Load environment variables from .env file
dotenv.config();

// Initialize express
const app = express();

// Application layer middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Update this to match your client address
  })
);
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/auth", authRouter);

// Client error handler
app.use((req, res, next) => {
  res.status(404).send("route not found");
  next();
});

// Server side error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    message: errorMessage,
    statusCode,
  });
});

export default app;
