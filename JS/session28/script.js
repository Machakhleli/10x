// task 1



function revealMessage() {
    const decodedMsg = document.getElementById("decoded-message");
    const hiddenMsg = document.getElementById("hidden-message");
    hiddenMsg.style.display = "block";

    let codedText = hiddenMsg.textContent;
    codedText = codedText.split("").reverse().join("");
    decodedMsg.textContent = codedText;

    console.log(codedText);
}

