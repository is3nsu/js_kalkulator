"use strict";

// selectors
const numBtn = document.querySelectorAll(".numbers");
const opBtn = document.querySelectorAll(".operators");
const resultBtn = document.querySelector(".result");
const clearBtn = document.querySelector(".clear-btn");
const displayActual = document.querySelector(".calc-display-actual");
const displayOperator = document.querySelector(".calc-display-operator");
const displayPrevious = document.querySelector(".calc-display-previous");
const past = document.querySelector(".list");

// event listeners

numBtn.forEach((button) => {
  button.addEventListener("click", addNum);
});

opBtn.forEach((button) => {
  button.addEventListener("click", addOperator);
});

resultBtn.addEventListener("click", result);
clearBtn.addEventListener("click", clear);

// functions
function addNum(e) {
  let item = e.target;
  displayActual.textContent += item.textContent;
}

function addOperator(e) {
  let item = e.target;
  if (displayPrevious !== "") {
    displayPrevious.textContent += displayOperator.textContent;
  }
  displayOperator.textContent = "";
  displayOperator.textContent += item.textContent;
  displayPrevious.textContent += displayActual.textContent;
  displayActual.textContent = "";

  if (item.textContent == "=") {
    return;
  } else if (item.textContent == "AC") {
    displayActual.textContent = "";
    displayOperator.textContent = "";
    displayPrevious.textContent = "";
  }
}

function result() {
  displayActual.textContent = eval(
    (displayPrevious.textContent += displayActual.textContent)
  );
  const pastEq = document.createElement("li");
  pastEq.classList.add("pasteq");
  pastEq.textContent = `${displayPrevious.textContent} = ${displayActual.textContent}`;
  past.appendChild(pastEq);

  displayOperator.textContent = "";
  displayPrevious.textContent = "";
}

function clear() {
  past.remove();
}
