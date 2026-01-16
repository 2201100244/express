var express = require('express');
var router = express.Router();

const {MongoClient} = require('mongodb');
const url = '';
const client = new MongoClient(url);

router.get('/', async (req,res) => {
  const database = client.db('notes');
  const notes = database.collection('notes');

  const query = {id:1};
  const note = await notes.findOne(query);
  res.json(note);
})

module.exports = router;
