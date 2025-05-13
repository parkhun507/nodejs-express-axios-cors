const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();

// CORS 설정: 모든 출처 허용
app.use(cors());

// 요청 본문을 텍스트 형식으로 처리하기 위한 미들웨어
app.use(express.text());

// 초기 데이터
let data = { message: '안녕하세요!' };

// GET 요청 처리: 메시지 데이터를 JSON 형식으로 반환
router.get('/message', (req, res) => {
  res.json(data);
});

// POST 요청 처리: 요청 본문을 메시지로 설정
router.post('/message', (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${req.body}`);
});

// PUT 요청 처리: 요청 본문을 메시지로 설정
router.put('/message', (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

// DELETE 요청 처리: 메시지 데이터를 초기화
router.delete('/message', (req, res) => {
  data = {};
  res.send('데이터가 삭제되었습니다.');
});

// 라우터를 앱에 추가
app.use('/api', router);

// 서버를 3000 포트에서 실행
app.listen(3000, () => {
  console.log('Express 서버가 http://localhost:3000/api/ 에서 실행 중입니다.');
});
