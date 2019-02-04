//ブラウザに動きがあったことをイベントと呼ぶ onsubmit もその1つ
//この場合、クロージャを使っているのでもちろん以下のようにアロー関数も使える
document.getElementById('form').onsubmit = () => {
  const word = document.getElementById('form').word.value;
  //console.log('クリックされました');
  document.getElementById('output').textContent = '「' + word + '」';
  return false;
}