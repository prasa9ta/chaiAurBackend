import dotenv from "dotenv"

import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
    path: '.env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`server is listening on the port number ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Mongodb Connection Failed !!! ",error);
})




/*********************************
import express from "express";
const appp = express()


;(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       appp.on("error",()=>{
        console.log("ERRR",error)
        throw error
       })

       appp.listen(process.env.PORT,()=>{
        console.log(`App is lostening on port ${process.env.PORT}`)
       })
    }catch(error){
        console.error("ERROR: ",error)
        throw error
    }
})()


*/