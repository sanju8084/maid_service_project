import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user_route.js';
import authRoutes from './routes/auth_route.js';
mongoose.connect(process.env.MONGO).then(()=>{
console.log("connect to mongodb");
}).catch((err)=>{
    console.log(err);
})
const app=express();
app.use(express.json());
app.listen(5000,()=>{
    console.log("server listening on port 5000");
});
app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

