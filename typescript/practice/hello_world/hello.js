"use strict";
var Hello = /** @class */ (function () {
    function Hello() {
        this.count = 0;
        console.log('Hello World');
    }
    Hello.prototype.tick = function () {
        ++this.count;
        console.log('count', this.count);
    };
    return Hello;
}());
var hello = new Hello();
function main() {
    hello.tick();
    setTimeout(main, 1000);
}
main();
