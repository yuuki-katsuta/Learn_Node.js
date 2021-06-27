// 'hello,worldを返すサーバーを作成'

const http = require('http');
const server = http.createServer((req, res) => {
  res.end('hello,world');
});
server.listen(3000);
