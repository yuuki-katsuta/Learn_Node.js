//ミドルウェアは関数
//ログ出力を行う
module.exports = function (req, res, next) {
  // IPアドレス
  var ipaddress =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    (req.socket && req.socket.remoteAddress) ||
    (req.connection.socket && req.connection.socket.remoteAddress) ||
    '0.0.0.0';

  var date = new Date().toISOString();
  var method = req.method;
  var url = req.url;
  var ua = req.headers['user-agent'];

  console.log(`${ipaddress} [${date}] "${method} ${url}" - ${ua}`);

  next();
};
