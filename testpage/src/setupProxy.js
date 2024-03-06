const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // 프록시 설정
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
      pathRewrite: {
        '^/default/api2': '/default'
      }
    })
  );
};
