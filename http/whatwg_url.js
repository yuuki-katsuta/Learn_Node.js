// 1. "https://www.google.com/"を WHATWG URL オブジェクトを利用して分解

const { URL } = require('url');
const url = new URL('https://www.google.com/'); //分解

console.log(url.protocol); //プロコトル
console.log(url.hostname); //ホスト名
