const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // 프록시 설정
  app.use(
    '/default',
    createProxyMiddleware({
      target: 'https://ilxy0qkf91.execute-api.ap-northeast-2.amazonaws.com',
      changeOrigin: true,
      pathRewrite: {
        '^/default': '/default'
      }
    })
  );
};
