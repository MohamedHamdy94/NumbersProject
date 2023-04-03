import express from 'express';
import Numbers from '../models/numData.js';
import mongoose from 'mongoose';
import SearchResult from '../models/search.js';

const search = express.Router();
search.get('/numbers', async (req, res) => {
  const searchResult = await SearchResult.find({});
  if (searchResult) {
    res.send(searchResult);
  } else {
    res.status(404).send({ message: 'search Result Not Found' });
  }
});


search.post('/post', async (req, res) => {
  const phoneInfo=req.body.data
  console.log(phoneInfo)
   phoneInfo._id= new mongoose.Types.ObjectId();
   console.log(phoneInfo._id)

     const saveSearch = await SearchResult.insertMany(phoneInfo);
    res.send(saveSearch);
  
});




export default search;
