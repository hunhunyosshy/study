"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function returnByPromise(word) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(word);
        }, 100);
    });
}
// async functionの返り値の型は必ずPromiseになる
function helloAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        // この関数は実行すると A, TypeScript, B が順番に表示される
        console.log("A");
        // Promiseな値をawaitすると中身が取り出せる（ように見える）
        const word = yield returnByPromise("TypeScript");
        console.log(word);
        console.log("B");
        return `Hello, ${word}`;
    });
}
// awaitが使えるのは必ずasync functionの中
(() => __awaiter(this, void 0, void 0, function* () {
    const hello = yield helloAsync();
    console.log(hello);
}))();
// 普通にPromiseとして扱うこともできる
helloAsync().then(hello => console.log(hello));
