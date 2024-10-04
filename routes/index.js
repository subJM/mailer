var express = require('express');
var router = express.Router();

const sendEmail = require('../utils/sendEmail'); // sendEmail 유틸리티 import

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/mails', async function(req, res, next) {

  const emailContent =
    `안녕하세요, 테스트님.

  고객님의 요청으로, 주문 번호 111의 주문이 성공적으로 삭제되었습니다.

  저희 'HOLO'의 서비스를 이용해주셔서 감사합니다.`;

  await sendEmail({
      to: 'thswhdals@gmail.com',
      subject: '이메일 발송 테스트',
      text: emailContent,
  });

  res.status(201).send({ result: 'success' });

});





module.exports = router;
