/**
 1. 2秒ごとに "tick"イベント を発火する「Clock」クラスを作成
    → clock.js を作成
      - construcrot() intervalとtimerのメンバ変数を初期化
      - start()       タイマーを開始
      - stop()        タイマーを停止
 2. 実際に「Clock」クラスを使って2秒ごとにカウントアップしてみる
*/

const EventEmitter = require('events');
const Clock = class extends EventEmitter {
  constructor() {
    super(); //親クラスを呼ぶ
    this.interval = 2000;
    this.timer = null;
  }
  start() {
    if (this.timer) {
      this.stop();
    }
    this.timer = global.setInterval(() => {
      this.emit('tick', '発火！！'); // イベント発生させる
    }, this.interval);
  }
  stop() {
    if (!this.timer) return;
    global.clearInterval(this.timer); //停止
    this.timer = null;
  }
};
module.exports = Clock;
