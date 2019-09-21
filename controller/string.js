const StringPair = require('../models').StringPair;
const fun = require('../helpers/fun');

module.exports = {
  async getAllStrings(_, res) {
    try {
      const stringCollection = await StringPair.findAll();
      res.status(200).send(stringCollection);
    }
    catch(e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  async checkThenAdd(req, res) {
    const strA = req.body.strA;
    const strB = req.body.strB;

    // validation starts
    if(!strA) { // must pass first parameter
      res.status(422).json({ errors: ['strA is required.'] });
      return;
    }

    if(typeof strB === 'undefined') { // must pass, atleast with an empty string
      res.status(422).json({ errors: ['strB can not be undefined.'] });
      return;
    }
    // validation ends

    try {
      const canBeObtained = fun(strA, strB);
      if(canBeObtained) {
        await StringPair.create({
            strA,
            strB
        });
      }
      res.status(200).json({
        result: canBeObtained
      });
    }
    catch(e) {
      console.log(e);
      res.status(500).send(e);
    }             
  },
}