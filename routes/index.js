var express = require('express');
var router = express.Router();
const stringController = require('../controller').string;

/* GET home page. */
router.get('/', function(_, res, _) {
  res.render('index');
});

router.get('/list', stringController.getAllStrings);
router.post('/add', stringController.checkThenAdd);

module.exports = router;
