function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputField = document.querySelector("#controls > input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
// console.log(inputField);
let value;
let markup = "";
let size = 30;
const setValue = () => {
  const checkedValue = Number(inputField.value);
  if (!Number.isNaN(checkedValue)) {
    value = checkedValue;
  } else {
    alert(`Value ${checkedValue} incorrect`);
  }
};

const createBoxes = () => {
  setValue();
  for (let i = 0; i < value; i += 1) {
    markup += `<div style='background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;'></div>`;
    size += 10;
  }

  boxes.innerHTML = markup;
};

const destroyBoxes = () => {
  markup = "";
  size = 30;
  boxes.innerHTML = "";
  value = 0;
  inputField.value = "";
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
