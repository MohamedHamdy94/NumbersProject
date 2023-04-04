import express from 'express';
import mongoose from 'mongoose';
import Numbers from '../models/numData.js';
import SearchResult from '../models/search.js';

const numData = express.Router();

numData.get('/:number', async (req, res) => {
  const numInfo = await Numbers.findOne({ number: req.params.number });
  if (numInfo) {
    res.send(numInfo);
    numInfo._id = new mongoose.Types.ObjectId();
    const saveSearch = await SearchResult.insertMany(numInfo);
  } else {
    const saveSearch = await SearchResult.insertMany({
      number: req.params.number,
    });
    res.send(numInfo);
  }
});

// numData.get('/?number=:number', async (req, res) => {
//   console.log('num don')
//   const numInfo = await Numbers.find({});
//   if (numInfo) {
//     // const saveSearch = await Search.insertMany(numInfo);

//     res.send(numInfo);
//   } else {
//     res.status(404).send({ message: 'Number Not Found' });
//   }
// });

export default numData;
