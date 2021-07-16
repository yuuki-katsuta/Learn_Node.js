const express = require('express');
const app = express();

//allはリクエストの種類に関わらずすべて読み取る
app.all('/', (req, res) => {
  var body = '';
  console.log(req.method);
  console.log(req.url);
  console.log(JSON.stringify(req.headers));
  //リクエスト(req)はリーダブルストリーム
  //小さなデータ一個分読み込んだときに発生するイベントが data イベント
  req.on('data', (chunk) => {
    body += chunk;
  });
  // すべてのデータの読み込みが終わったらendイベント発生
  req.on('end', () => {
    console.log(body);
  });
  res.send('OK');
});

app.listen(3000);
