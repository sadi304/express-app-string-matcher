var express = require('express');
var router = express.Router();
const stringController = require('../controller').string;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', stringController.getAllStrings);
router.post('/add', stringController.checkThenAdd);

module.exports = router;
