//GENERADOR DE PASSWORD | DANIEL JIMÉNEZ

const inputRangeElement = document.getElementById("charLengthRange");
const textRangeElement = document.getElementById("lengthSelected");
const strengthInfoElement = document.getElementById("strength");
const buttonElement = document.getElementById("button");
const inputPasswordElement = document.getElementById("passwordGenerate");

inputRangeElement.addEventListener("input", () => {
  lengthSelected.textContent = inputRangeElement.value;
  if (inputRangeElement.value < 5) {
    strengthInfoElement.textContent = "TOO SHORT";
  } else if (inputRangeElement.value >= 5 && inputRangeElement.value < 10) {
    strengthInfoElement.textContent = "WEAK";
  } else if (inputRangeElement.value >= 10 && inputRangeElement.value < 15) {
    strengthInfoElement.textContent = "MEDIUM";
  } else if (inputRangeElement.value >= 15) {
    strengthInfoElement.textContent = "STRENGTH";
  }
  if (inputRangeElement.value < 5) {
    buttonElement.disabled === true;
    buttonElement.classList.add("disabled");
  } else {
    buttonElement.disabled === false;
    buttonElement.classList.remove("disabled");
  }
});

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/";

const randomNumber = () => Math.floor(Math.random() * characters.length + 1);
let password = "";
const generateRandomCharacter = length => {
  password = "";
  for (i = 0; i <= length - 1; i++) {
    password += characters.charAt(randomNumber() - 1);
  }
};

buttonElement.addEventListener("click", () => {
  generateRandomCharacter(inputRangeElement.value);
  inputPasswordElement.value = `${password}`;
});
