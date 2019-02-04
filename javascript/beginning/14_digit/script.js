//桁に合う分の0をつける関数
let addZero = (num, digit) => {
  // let numDigit = String(num).length;
  // let zero ='';
  //もちろんforでできる
  // for (let i = 0; i < digit - numDigit; i++) {
  //   zero += '0';
  // }
  //return zero + String(num);

  //もちろんwhileでもできる
  //こっちの方がスッキリするかも
  let numString = String(num);
  while (numString.length < digit) {
    numString = '0' + numString;
  }
  return numString;
}

//console.log(addZero(32, 4));

let songList = [
  'ドンマイケル',
  'どうして',
  'JSの歌',
  'PHPやりたい',
  '頑張れプログラミング'
];

for (let i = 0; i <songList.length; i++) {
  let paragraph = document.createElement('p');
  paragraph.textContent = addZero(i + 1, 2) + '. ' + songList[i];
  document.getElementById('list').appendChild(paragraph);
}