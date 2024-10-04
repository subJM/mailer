var express = require('express');
var router = express.Router();

const sendEmail = require('../utils/sendEmail'); // sendEmail 유틸리티 import

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/mails', async function(req, res, next) {
  const admin_email = req.body.admin_email;
  const pass = req.body.pass;
  const receiveEmail = req.body.to;

  const emailTitle = req.body.title;
  const emailContent = req.body.content;
  // const emailContent =
  //   `안녕하세요, 테스트님.

  // 고객님의 요청으로, 주문 번호 111의 주문이 성공적으로 삭제되었습니다.

  // 저희 'HOLO'의 서비스를 이용해주셔서 감사합니다.`;

  
  await sendEmail({
      admin_email: admin_email, 
      password: pass,
      to: receiveEmail,
      subject: emailTitle,
      text: emailContent,
  });

  // res.status(201).send({ result: 'success' });
  res.send('success');
});

module.exports = router;
