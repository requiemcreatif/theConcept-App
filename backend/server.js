import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";

//Middleware
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";

const app = express();

//Routes
app.get("/", (req, res) => {
  //throw new Error("Something strange just happened!!");
  res.send("Welcome to the concept app!");
});

app.use(notFound);
app.use(errorHandler);

//Server listening
const port = process.env.PORT || 8000;

// Connect to the database
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server running on port ${port} for the Concept app`));
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

start();
