import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './ApiRoutes/UserRouter.js'
import authRouter from './ApiRoutes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.Mongo)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.log('❌ MongoDB connection error:', err);
  });

const app = express();

app.use(express.json ());

app.listen(3000, () => {
  console.log('✅ server is running on port 3000!!!');
});


app.use('/api/user',UserRouter)

app.use('/api/auth',authRouter)


