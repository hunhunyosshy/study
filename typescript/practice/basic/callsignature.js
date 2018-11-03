"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj;
// 当てはまる値はこんな感じ
obj = word => `Hello, ${word}`;
obj = (word) => {
    return `Hello, ${word}`;
};
obj = function (word) {
    return `Hello, ${word}`;
};
// 呼び出してみよう！
let str = obj("TypeScript");
console.log(str);
