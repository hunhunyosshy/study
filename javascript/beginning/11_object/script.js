//String型について
let word1 = 'まゆがまゆまゆまゆをまゆってる';
console.log(word1.indexOf('まゆ'));
console.log(word1.lastIndexOf('まゆ'));
console.log(word1.charAt(4));
console.log(word1.split('ゆ'));
console.log(word1.length);
console.log(word1.repeat(2));
console.log(word1.concat('姿、可愛い'));
console.log(word1.codePointAt(2));
console.log(String.fromCodePoint(12364));


//Symbol型について

let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

console.log(typeof sym1);
console.log(sym1.toString());
//Symbol型だと同じものを入れても一緒だと判別されない
console.log(sym1 === sym2);

//Symbol型は値そのものに意味がなく、名前に意味がある場合に使える
//列挙定数とかがおすすめ(曜日を表す定数的なもの)

//以下のようにすれば同盟であっても違うものになる
const MONDAY = Symbol();
const TUESDAY = Symbol();
const WEDNESDAY = Symbol();

//なので・・・
console.log(MONDAY === TUESDAY); //false
console.log(MONDAY === MONDAY); //true