import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './ApiRoutes/UserRouter.js'
import authRouter from './ApiRoutes/auth.route.js';
import cookieParser from 'cookie-parser';

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

app.use(cookieParser())

app.listen(3000, () => {
  console.log('✅ server is running on port 3000!!!');
});


app.use('/api/user',UserRouter)

app.use('/api/auth',authRouter)

app.use((err, req, res, next) => {
  console.error('❌ Error caught by middleware:', err); // Debug
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


 




