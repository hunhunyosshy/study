"use strict";
class Base {
    constructor() {
        this.a = "a";
        this.b = "b";
        this.c = "c";
        this.d = "d";
    }
    method() {
        // privateなプロパティは利用しているコードが一箇所もないと警告してもらえる
        this.d;
    }
}
class Inherit extends Base {
    method() {
        // 子クラスから public, protected はアクセス可能
        this.a;
        this.b;
        this.c;
        // private はコンパイルエラーになる
        // this.d;
    }
}
const base = new Base();
// public は通常のアクセスが可能
base.a;
base.b;
// protected, private はコンパイルエラーになる
// base.c;
// base.d;
