// 개발자 모드면 dev.js 서버를, 배포모드면 prod.js 모드를 연결

if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');

} else {
  module.exports = require('./dev');
}