const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(
  '/default/api1',
  createProxyMiddleware({
    target: 'https://ilxy0qkf91.execute-api.ap-northeast-2.amazonaws.com',
    changeOrigin: true,
    pathRewrite: {
      '^/default/api1': '/default'
    }
  })
);

app.use(
  '/default/api2',
  createProxyMiddleware({
    target: 'https://6jvshxc3ij.execute-api.ap-northeast-2.amazonaws.com',
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
      '^/default/api2': '/default'
    }
  })
);

app.use(
  '/default/api3',
  createProxyMiddleware({
    target: 'https://ll9k7ri582.execute-api.ap-northeast-2.amazonaws.com',
    changeOrigin: true,
    pathRewrite: {
      '^/default/api3': '/default'
    }
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
