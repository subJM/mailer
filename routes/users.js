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
  const senderName = req.body.senderName;

  const emailTitle = req.body.title;
  const emailContent = req.body.content; // HTML 형식의 콘텐츠
  
  try {
    await sendEmail({
      admin_email: admin_email, 
      password: pass,
      senderName: senderName,
      to: receiveEmail,
      subject: emailTitle,
      html: emailContent, // HTML 형식의 콘텐츠를 사용
    });
    res.status(201).send({ result: 'success' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ result: 'error', message: error.message });
  }
});


module.exports = router;
