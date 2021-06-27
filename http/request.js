/**
 1. リクエスト情報をもと以下のアクセス情報をコンソールログを出力
  - 日時
  - メソッド
  - URL
  - User-Agent
 */

//まずhttpからサーバーを作成
const http = require('http');
const server = http.createServer((req, res) => {
  //リクエスト情報を分析
  console.log(
    `[${new Date().toISOString()}]` +
      `${req.method}` +
      `${req.url}` +
      `${req.headers['user-agent']}`
  );
  res.end('hello, world'); // hello, worldをレスポンスに書き込む
});

server.listen(3000);
