const StringPair = require('../models').StringPair;

module.exports = {
  async getAllStrings(req, res) {
    try {
      const stringCollection = await StringPair.findAll();
      res.status(201).send(stringCollection);
    }
    catch(e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
  async checkThenAdd(req,res) {
    return res.json("hello");
    try {
      const stringCollection = await StringPair.create({
          stringA
      });
      res.status(201).send(stringCollection);
    }
    catch(e) {
      console.log(e);
      res.status(400).send(e);
    }             
  },
}