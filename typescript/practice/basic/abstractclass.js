"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    sleep() {
        return "zzzZZZ...";
    }
}
class Cat extends Animal {
    constructor() {
        super(...arguments);
        // プロパティの実装を強制される
        this.name = "Cat";
        this.poo = "poo...";
    }
    // メソッドの実装を強制される
    speak() {
        return "meow";
    }
}
new Cat();
