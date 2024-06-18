import express from "express";
import connectDB from "./config/db.js";

// express initial
const app = express();
// port
const port = process.env.PORT || 8000;



app.listen(port, async () => {
  console.log('server is on ', port);
  await connectDB();
});