import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './ApiRoutes/UserRouter.js';

dotenv.config();

mongoose.connect(process.env.Mongo)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000!!!');
});


app.use('/api/user',UserRouter)

