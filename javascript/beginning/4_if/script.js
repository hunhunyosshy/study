var message = "";
if (window.confirm('準備はOKですか？')) {
    message = "それでは開始します";
} else {
    message = "キャンセルします";
}
document.getElementById("confirm").textContent = message;
