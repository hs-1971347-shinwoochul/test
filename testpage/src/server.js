const express = require('express');
const fs = require('fs');
const cors = require('cors');  // cors 미들웨어 추가
const app = express();
const port = 3001;

app.use(cors());  // 모든 origin에서의 요청을 허용하는 간단한 설정. 상황에 따라 더 세부적인 설정이 필요할 수 있습니다.

app.get('/get-data', (req, res) => {
  const filePath = 'C:\\Users\\shin\\Desktop\\testpage\\src\\data.json';
  const data = fs.readFileSync(filePath, 'utf8');
  res.json(JSON.parse(data));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
