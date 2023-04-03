import express from "express";
import Numbers from "../models/numData.js";
import data from "../data.js";

const seedRouter = express.Router();
seedRouter.get("/", async (req, res) => {
  console.log("don")
  await Numbers.deleteMany({});
  const createNumbers = await Numbers.insertMany(data);
  
  res.send( createNumbers );
});


export default seedRouter;
