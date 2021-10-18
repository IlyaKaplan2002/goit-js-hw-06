const inputField = document.querySelector("input#font-size-control");

const onInput = () => {
  const val = inputField.value;
  const text = document.querySelector("span#text");
  text.style.fontSize = `${val}px`;
};

inputField.addEventListener("input", onInput);
