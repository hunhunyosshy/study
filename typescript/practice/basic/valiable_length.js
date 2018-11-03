"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(...args) {
    return `Hello, ${args.join(" & ")}`;
}
// Hello, TS & JS と表示される
console.log(hello("TS", "JS"));
