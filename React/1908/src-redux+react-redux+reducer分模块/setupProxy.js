const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://47.92.152.70', // 代理哪一个服务器
    changeOrigin: true, // 代理
    pathRewrite: {
      '^/api': '' // 以 /api 开头的请求，认为就是请求的代理
      // /api/pro   ===> http://47.92.152.70/pro
    }
  }))
  // 纯属凑数
  app.use(proxy('/test', {
    target: 'https://www.baidu.com', // 代理哪一个服务器
    changeOrigin: true, // 代理
    pathRewrite: {
      '^/test': ''
    }
  }))
}