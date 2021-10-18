const inputField = document.querySelector("#validation-input");

const length = inputField.dataset.length;

const onBlur = () => {
  const valueLength = inputField.value.length;
  if (valueLength == Number(length)) {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  } else {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
  }
};

inputField.addEventListener("blur", onBlur);
