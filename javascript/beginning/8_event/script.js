document.getElementById('form').onsubmit = function() {
    var search = getElementById('form').word.value;
    document.getElementById('output').textContent = '『' + search + '』の検索中・・・';
    return false;
};