const inputField = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

const setOutput = (value) => {
  output.textContent = value;
};

const onInput = () => {
  if (inputField.value) {
    setOutput(inputField.value);
  } else {
    setOutput("Anonymous");
  }
};

inputField.addEventListener("input", onInput);
