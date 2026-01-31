var express = require('express');
var router = express.Router();
const cors = require('cors');
require('dotenv').config();

router.use(cors());

const {MongoClient} = require('mongodb');
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

router.get('/', async (req,res) => {
  const database = client.db('notes');
  const notes = database.collection('notes');
  const note = await notes.find({}).toArray();
  res.json(note);
})

module.exports = router;
