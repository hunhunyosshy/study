//ブラウザに動きがあったことをイベントと呼ぶ onsubmit もその1つ
//この場合、クロージャを使っているのでもちろんアロー関数も使える
document.getElementById('form').onsubmit = () => {
  console.log('クリックされました');
}