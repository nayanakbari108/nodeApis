import  express  from "express";
// import mongoose from "mongoose";
import usersRoutes from "./routes/user.js" 
import bodyParser from "body-parser";
import { connectDb } from "./data/database.js";
import {config }from "dotenv"

export const app= express();
const router =express.Router();
config({
  path:"./data/config.env"
})

//-------------middle ware-------

app.use(express.json());
app.use("/users",usersRoutes)
app.use(bodyParser.urlencoded({extended:true}));
//-----------------------------------

app.get("/",(req,res)=>{
  res.send("hiii")
})



