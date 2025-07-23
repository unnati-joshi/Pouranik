import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./DBConfig/dbConnect.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => {
    res.send("Welcome to Pouranik !");
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
})