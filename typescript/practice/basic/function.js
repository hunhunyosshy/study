"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(word) {
    return `Hello, ${word}`;
}
hello("TypeScript");
// 返り値の型を省略すると返り値の型から推論される
function bye(word) {
    return `Bye, ${word}`;
}
bye("Kazuki");
// ? をつけると呼び出しときに引数が省略可能になる
function hey(word) {
    // 省略可能にした時はundefinedの時の考慮が必要！
    return `Hey, ${word || "TypeScript"}`;
}
hey();
// デフォルト値の指定で仮引数の型を省略したりもできる
function ahoy(word = "TypeScript") {
    return `Ahoy! ${word}`;
}
ahoy();