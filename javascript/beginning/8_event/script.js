document.getElementById('form').onsubmit = function() {
    var search = getElementById('form').word.value;
    document.getElementById('output').textContent = '『' + search + '』の検索中・・・';
    return false;
};

// @link https://developer.mozilla.org/ja/docs/Web/Guide/Events/Creating_and_triggering_events
(function () {
	var form = document.querySelector("#form");
	form.addEventListener("GreatWork", e => console.table(e) || alert("Great Work Yoshikawa!"));
	form.dispatchEvent(new Event("GreatWork"));
})();
