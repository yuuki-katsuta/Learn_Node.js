// ルーティングをモジュール化(分離)
const router = require('express').Router();

//use()でリクエストレスポンスに対しての処理を実装
//ログを出力する処理
router.use((req, res, next) => {
  console.log(new Date().toISOString());
  next();
});

//app.jsの方でuser/配下でのルーティングだと設定した
router.get('/', (req, res) => {
  res.send('/');
});
// user/about
router.get('/about', (req, res) => {
  res.send('/about');
});

module.exports = router;
