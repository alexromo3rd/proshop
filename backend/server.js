import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js'; // .js extension needed when bringing in javascript files using es6 modules syntax

import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Sever running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
