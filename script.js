function encryptAES(text, secretKey) {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
}

function decryptAES(ciphertext, secretKey) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

function encryptBase64(text) {
    return btoa(text);
}

function decryptBase64(ciphertext) {
    return atob(ciphertext);
}

function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const algorithm = document.getElementById('algorithm').value;
    const secretKey = "generalROND21"; 

    let outputText = "";

    switch (algorithm) {
        case "AES":
            outputText = encryptAES(inputText, secretKey);
            break;
        case "Base64":
            outputText = encryptBase64(inputText);
            break;
        default:
            outputText = "Algoritma tidak valid!";
    }

    document.getElementById('outputText').value = outputText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const algorithm = document.getElementById('algorithm').value;
    const secretKey = "generalROND21"; 

    let outputText = "";

    switch (algorithm) {
        case "AES":
            outputText = decryptAES(inputText, secretKey);
            break;
        case "Base64":
            outputText = decryptBase64(inputText);
            break;
        default:
            outputText = "Algoritma tidak valid!";
    }

    document.getElementById('outputText').value = outputText;
}