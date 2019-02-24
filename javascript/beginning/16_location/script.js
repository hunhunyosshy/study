function getLanguage() {
  return document.querySelector('html').lang;
}

function getOption(lang) {
  switch (lang) {
    case 'ja':
      return document.querySelector('option[value="index.html"]');
    case 'en':
      return document.querySelector('option[value="index_en.html"]');
    case 'zh':
      return document.querySelector('option[value="index_zh.html"]');
    default:
      return document.querySelector('option[value="index.html"]');
  }
}

//オプション情報から初期にセットすべきボックスはどれかを取得し、それにselected を与える
//これをしないとどのページでも初期値が「日本語」になってしまう
getOption(getLanguage()).selected = true;

//言語が変更された際に表示するページを変更する
document.getElementById('form').select.onchange = () => {
  location.href = document.getElementById('form').select.value;
}