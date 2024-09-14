import express from "express";
import mongoose from "mongoose";
import router from "./routers/jobRoutes.js";

const port = 4000;
const hostname = "127.0.0.1";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);
try{
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/PostingJobAPI"
    );
    if(connection)
        app.listen(port, hostname, () => console.log("server Started"));
    } catch (error){
        console.log(error);
        
    }
