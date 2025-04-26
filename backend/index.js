import express from "express";
import dotenv from "dotenv";
import { DbConnect } from "./Db/db.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT||5000;

app.use(express.json());


app.listen(PORT,()=>{
    DbConnect();
    console.log("the server has been started ont the port",PORT)
})