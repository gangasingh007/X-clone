import express from "express";
import dotenv from "dotenv";
import { DbConnect } from "./Db/db.js";
import authRoutes from "./Routes/auth.routes.js"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoutes);

dotenv.config();


app.listen(3000,()=>{
    DbConnect();
    console.log("the server has been started ont the port 3000")
}) 