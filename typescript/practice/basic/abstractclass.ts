abstract class Animal {
    abstract name: string;
    abstract get poo(): string;
  
    abstract speak(): string;
    sleep(): string {
      return "zzzZZZ...";
    }
  }

  class Cat extends Animal {
    // プロパティの実装を強制される
    name = "Cat";
    poo = "poo...";
  
    // メソッドの実装を強制される
    speak(): string {
      return "meow";
    }
  }
  
  new Cat();
  
  export { }