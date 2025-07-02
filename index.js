import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const app = express();

app.use(express.json());


import itemRoutes from "./routes/item.routes.js";

app.use('/api',itemRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('mongodb connected successfully!');
})
.catch((err)=>console.log(err));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
   });