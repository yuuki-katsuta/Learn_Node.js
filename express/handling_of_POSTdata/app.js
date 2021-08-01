var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// body-parserを利用してリクエストボディをパースし、req.bodyへ保存

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); //フォームのポストデータをエンコーディング
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render(
    '/Users/tpryuki/node/learn_node,js/express/handling_of_POSTdata/views/index.ejs'
  );
});
app.post('/', (req, res) => {
  res.send('OK');
  console.log(req.body);
});

app.listen(3000);
