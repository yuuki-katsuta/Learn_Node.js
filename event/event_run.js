/**
 1. EventEmitterに複数のイベント("event")を設定し、
   EventEmitter を実行(emit())した際の呼び出し順を確認する
 */

const EventEmitter = require('events');
const e = new EventEmitter();

e.on('event', () => console.log('event 1st'));
e.on('event', () => console.log('event 2st'));
e.on('event', () => console.log('event 3st', this));
e.on('event', function () {
  console.log(this);
});
e.emit('event');
//イベントは設定された順に実行される
