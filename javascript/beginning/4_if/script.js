var resultMessage = "";
if (window.confirm('準備はOKですか？')) {
    resultMessage = "それでは開始します";
} else {
    resultMessage = "キャンセルします";
}
document.getElementById("confirm").textContent = resultMessage;
