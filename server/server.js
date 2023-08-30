import express from 'express';
import path from 'path';
//const path =require('path')
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import numData from './routes/numData.js';
import search from './routes/search.js';
import seedRouter from './routes/seedRoutes.js';


const app = express();
app.use(cors());
app.use(express.json({limit:'100kb'}));
dotenv.config();


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });


app.use('/api/seed', seedRouter);
app.use('/api/searchnumder', numData);
app.use('/api/searchnesult', search);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
);
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});
