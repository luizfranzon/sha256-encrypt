var crypto = require("crypto-js");

const button = document.getElementById("button")
const result = document.getElementById("result")

button.addEventListener('click', encrypt)

function encrypt() {
    let input = document.getElementById("input").value

    const sha256 = crypto.SHA256(input)
    const hash = sha256.toString(crypto.enc.sha256);

    if (input != "") {
        result.value = hash
    } else {
        result.value = ""
    }
}