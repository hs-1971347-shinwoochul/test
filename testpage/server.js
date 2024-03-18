const express = require('express');
const path = require('path');

const app = express();

// 정적 파일을 제공할 경로 설정
app.use(express.static(path.join(__dirname, 'build')));

// 모든 요청에 대해 index.html 반환
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 포트 설정 및 서버 시작
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
