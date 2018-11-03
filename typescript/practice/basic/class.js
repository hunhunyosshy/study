"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor(str) {
        // インスタンス変数
        this.num = 1;
        // strは省略可能じゃないのでコンストラクタで初期値を設定しなければならない
        // 設定し忘れても現在のTypeScriptはエラーにしてくれないので注意が必要…
        this.str = str;
    }
    // メソッドの定義 返り値は省略してもOK
    hello() {
        return `Hello, ${this.str}`;
    }
    get regExp() {
        if (!this.regExpOptional) {
            return new RegExp("test");
        }
        return this.regExpOptional;
    }
}
const base = new Base("world");
console.log(base.hello());
