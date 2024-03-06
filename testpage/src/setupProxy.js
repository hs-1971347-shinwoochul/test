const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/default/metakids_lambda_get_google_sheet?sheetID=1soQzBZjn1Kzbo_RxhHEzmb30C4ednvDwvKLu2Qhn6dM&tabName=avatar', {
      target: 'https://ilxy0qkf91.execute-api.ap-northeast-2.amazonaws.com',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/default', {
      target: 'https://6jvshxc3ij.execute-api.ap-northeast-2.amazonaws.com',
      changeOrigin: true,
    }),
  );
};