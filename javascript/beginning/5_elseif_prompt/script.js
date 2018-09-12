var makeOutputMessage = function(promptMessage) {
    var defaultMessage = promptMessage + "さん、初めまして。";
    if (promptMessage === "田中") {
        return "おお、あなたで田中さんは5人目ですね。" + defaultMessage;
    } else if (promptMessage === "アームストロング") {
        return "おお、かっこいい名前ですね。" + defaultMessage;
    } else if (promptMessage === "吉川") {
        return "おお、いい人そうな響きですね。" + defaultMessage;
    } else if (!promptMessage) {
        return "名前を教えていただけないと、あなたのことを何て呼べばいいか分かりません。";
    }
    return defaultMessage;
}

var changeContentsByPrompt = function() {
    var outputMessage = makeOutputMessage(window.prompt("あなたの名前を教えてください"));
    document.getElementById("name").textContent = outputMessage;
}
