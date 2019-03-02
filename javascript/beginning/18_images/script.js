//セレクタを一気に取れる優れもの
let thumbs = document.querySelectorAll('.thumb');

for(let i = 0; i < thumbs.length; i++) {
  //ここはアロー関数が使えない
  //thisをバインドしてしまうとかそういうのだと思われる
  thumbs[i].onclick = function() {
    //data-imageの「image」はなんでもいいらしい
    //欲しい場合はthis.dataset.'hoge'で取ってこれるらしい
    document.getElementById('bigimg').src = this.dataset.image;
  };
}