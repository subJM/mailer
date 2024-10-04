var express = require('express');
var router = express.Router();

const sendEmail = require('../utils/sendEmail'); // sendEmail 유틸리티 import

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/mails', async function(req, res, next) {
  const admin_email = req.body.admin_email;
  const pass = req.body.pass;
  const receiveEmail = req.body.to;

  const emailTitle = req.body.title;
  const emailContent = req.body.content;
  
  await sendEmail({
      admin_email: admin_email, 
      password: pass,
      to: receiveEmail,
      subject: emailTitle,
      text: emailContent,
  });
  res.status(201).send({ result: 'success' });
  // res.send('success');
});

module.exports = router;
