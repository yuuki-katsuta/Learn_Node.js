var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  var data = {
    items: [{ name: '佐藤' }, { name: '鈴木' }, { name: '高橋' }],
  };
  res.render('./index.ejs', data); //テンプレートへデータを渡す
});

app.listen(3000);
