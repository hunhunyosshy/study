"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base = /** @class */ (function () {
    function Base(str) {
        // インスタンス変数
        this.num = 1;
        // strは省略可能じゃないのでコンストラクタで初期値を設定しなければならない
        // 設定し忘れても現在のTypeScriptはエラーにしてくれないので注意が必要…
        this.str = str;
    }
    // メソッドの定義 返り値は省略してもOK
    Base.prototype.hello = function () {
        return "Hello, " + this.str;
    };
    Object.defineProperty(Base.prototype, "regExp", {
        get: function () {
            if (!this.regExpOptional) {
                return new RegExp("test");
            }
            return this.regExpOptional;
        },
        enumerable: true,
        configurable: true
    });
    return Base;
}());
var base = new Base("world");
console.log(base.hello());
