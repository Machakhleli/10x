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

// task 2

let clasifiedDocuments = document.getElementsByClassName("classified");
console.log(clasifiedDocuments);

const arr = Array.from(clasifiedDocuments).filter((element) => {
  const securityLevel = element.getAttribute("data-security");

  if (securityLevel === "high") {
    element.style.backgroundColor = "red";
  } else if (securityLevel === "medium") {
    element.style.backgroundColor = "yellow";
  } else if (securityLevel === "low") {
    element.style.backgroundColor = "green";
  }

  element.style.cursor = "pointer";

  element.addEventListener("click", () => {
    alert(`Document content: ${element.textContent}`);
  });
});
console.log(arr);

// task 3

let suspects = document.getElementsByClassName("suspect");
const evidence = "red-hat";
const suspectList = Array.from(suspects);

suspectList.forEach((clue) => {
  if (clue.dataset.clue === evidence) {
    clue.classList.add("prime-suspect");

    const identified = document.createElement("div");
    identified.textContent = "IDENTIFIED";
    clue.insertAdjacentElement("afterend", identified);
  }
});

// task 4 

let dataEvidence = document.querySelectorAll('[data-evidence="true"]');
let evidenceArr = Array.from(dataEvidence);

// სტრიმი მჭირდება

// task 5


