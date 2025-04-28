import express from "express";
import dotenv from "dotenv";
import { DbConnect } from "./Db/db.js";
import authRoutes from "./Routes/auth.routes.js"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors);
app.use("/api/auth",authRoutes);

dotenv.config();
const PORT = process.env.PORT||5000;

app.listen(PORT,()=>{
    DbConnect();
    console.log("the server has been started ont the port",PORT)
})