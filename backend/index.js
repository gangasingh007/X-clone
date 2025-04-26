import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT||5000;

app.use(express.json());


app.listen(PORT,()=>{
    console.log("the server has been started ont the port",PORT)
})