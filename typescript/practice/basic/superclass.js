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
Object.defineProperty(exports, "__esModule", { value: true });
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.greeting = function (name) {
        return "Hi! " + name;
    };
    return Base;
}());
var Inherit = /** @class */ (function (_super) {
    __extends(Inherit, _super);
    function Inherit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Inherit.prototype.greeting = function (name) {
        return _super.prototype.greeting.call(this, name) + ". How are you?";
    };
    return Inherit;
}(Base));
var obj = new Inherit();
// Hi! TypeScript. How are you? と出力される
console.log(obj.greeting("TypeScript"));
