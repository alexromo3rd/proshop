import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js'; // .js extension needed when bringing in javascript files using es6 modules syntax

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// Middleware is a function that has access to the request, response cycle

// Will run before all api requests
// app.use((req, res, next) => {
//   console.log('HELLO');
//   next();
// });

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Sever running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
