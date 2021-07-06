const express = require('express');
const app = express();

//テンプレートエンジンの設定
app.set('view engine', 'jade');

app.get('/', (req, res) => {
  //reder()で出力
  res.status(200).render('index.jade', {
    title: 'Webアプリケーション開発',
  });
  //renderの第一引数はviewフォルダからのパス,第2引数渡したい値をオブジェクトで指定
});

app.listen(3000);
