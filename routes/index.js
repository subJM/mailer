var express = require('express');
var router = express.Router();

const sendEmail = require('../utils/sendEmail'); // sendEmail 유틸리티 import

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





module.exports = router;
