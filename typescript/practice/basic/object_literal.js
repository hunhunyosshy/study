"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// オブジェクトリテラルで値を作成！
let objA = {
    x: 1,
    y: 2,
};
// オブジェクト型リテラルで型を作成！(値は無し
// 上記の objA の型は型推論で objB と同一になる
let objB;
objB = { x: 1, y: 2 };
// おんなじ！
objA = objB;
objB = objA;
