import express from "express";
const app = express();
import dotenv from "dotenv"
import mongoose from "mongoose";
import { userRouter } from "./Routes/User.js";
dotenv.config();

   app.use(express.json())
 app.post("/api/v1/signUp",userRouter)



  
 async function runServer(){
      // const mongoUrl : string = process.env.MONGO_URL
      try {
            await mongoose.connect("");
                  console.log("db connected");
      } catch (error) {
         console.log(error);
         
      }
     
      
     
   
}

runServer();
app.listen(3000, ()=>{
   console.log("running");
   
})