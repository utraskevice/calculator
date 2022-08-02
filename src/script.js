const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");

const sumBtn = document.getElementById("sumBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");
const modBtn = document.getElementById("modBtn");

const output = document.getElementById("resultPlace");

// Sudėtis
sumBtn.addEventListener("click", sumFunction);

function sumFunction() {
  let x = Number(numOne.value);
  let y = Number(numTwo.value);
  let result = x + y;
  output.innerHTML = "Result is: " + result;
}

// Atimtis
subBtn.addEventListener("click", subFunction);

function subFunction() {
  let x = Number(numOne.value);
  let y = Number(numTwo.value);
  let result = x - y;
  output.innerHTML = "Result is: " + result;
}

// Daugyba
mulBtn.addEventListener("click", mulFunction);

function mulFunction() {
  let x = Number(numOne.value);
  let y = Number(numTwo.value);
  let result = x * y;
  output.innerHTML = "Result is: " + result;
}

// Dalyba
divBtn.addEventListener("click", divFunction);

function divFunction() {
  let x = Number(numOne.value);
  let y = Number(numTwo.value);
  let result = x / y;
  output.innerHTML = "Result is: " + result;
}

// Liekana
modBtn.addEventListener("click", modFunction);

function modFunction() {
  let x = Number(numOne.value);
  let y = Number(numTwo.value);
  let result = x % y;
  output.innerHTML = "Result is: " + result;
}
