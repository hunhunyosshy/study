"use strict";
class Hello {
    constructor() {
        this.count = 0;
        console.log('Hello World');
    }
    tick() {
        ++this.count;
        console.log('count', this.count);
    }
}
var hello = new Hello();
function main() {
    hello.tick();
    setTimeout(main, 1000);
}
main();
