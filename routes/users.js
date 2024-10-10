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
  
  // 유효성 검사
  if (!admin_email || !pass || !receiveEmail || !emailTitle || !emailContent) {
    return res.status(400).send({ result: 'error', message: '필수 필드가 누락되었습니다.' });
  }

  try {
    await sendEmail({
      admin_email: admin_email, 
      password: pass,
      senderName: senderName,
      to: receiveEmail,
      subject: emailTitle,
      html: emailContent,
    });
    res.status(201).send({ result: 'success' });
  } catch (error) {
    console.error('Error sending email:', error);

    // 특정 에러 유형에 따라 상태 코드와 메시지 설정 (예시)
    if (error.code === 'EAUTH') {
      res.status(401).send({ result: 'error', message: '인증 실패: 이메일과 비밀번호를 확인하세요.' });
    } else {
      res.status(500).send({ result: 'error', message: error.message });
    }
  }
});



module.exports = router;
