"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base() {
        this.a = "a";
        this.b = "b";
        this.c = "c";
        this.d = "d";
    }
    Base.prototype.method = function () {
        // privateなプロパティは利用しているコードが一箇所もないと警告してもらえる
        this.d;
    };
    return Base;
}());
var Inherit = /** @class */ (function (_super) {
    __extends(Inherit, _super);
    function Inherit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Inherit.prototype.method = function () {
        // 子クラスから public, protected はアクセス可能
        this.a;
        this.b;
        this.c;
        // private はコンパイルエラーになる
        // this.d;
    };
    return Inherit;
}(Base));
var base = new Base();
// public は通常のアクセスが可能
base.a;
base.b;
// protected, private はコンパイルエラーになる
// base.c;
// base.d;
