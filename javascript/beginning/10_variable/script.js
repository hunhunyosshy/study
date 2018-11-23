//letは同名の変数を許可しない
let msg = 'hogehoge';
//let msg = 'fugafuga';

//let命令の方がより細かく変数の有効範囲を管理できる

//varは同名の変数でもOK
var msg2 = 'hogehoge';
var msg2 = 'fugafuga';

//constで定数を表す
const TAX = 1.08;
let money = 100;

console.log(msg);
console.log(msg2);
console.log(money * TAX);