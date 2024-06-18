import dotenv from "dotenv";
import app from "./app.js"; // Import the app from app.js
import connectDB from "./config/db.js";

// Load environment variables from .env file
dotenv.config();

// Port
const port = process.env.PORT || 8000;

// Connect to the database and start the server
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDB();
});
