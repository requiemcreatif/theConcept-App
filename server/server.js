import express from "express";
import dotenv from "dotenv";

const port = process.env.PORT || 8000;
const app = express();

app.listen(port, () => console.log(`Server running on port ${port} for the Concept app`));
