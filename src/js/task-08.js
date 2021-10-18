const form = document.querySelector("form.login-form");
const elements = form.elements;

const filterElements = (elements) => {
  const filteredElements = [];
  for (const element of elements) {
    if (element.hasAttribute("name")) {
      filteredElements.push(element);
    }
  }
  return filteredElements;
};

const onSubmit = () => {
  const values = {};

  for (const element of filterElements(elements)) {
    if (element.value) {
      values[element.getAttribute("name")] = element.value;
    } else {
      continue;
    }
  }

  if (Object.keys(values).length <= 1) {
    alert("All fields must be filled in!");
  } else {
    console.log(values);
  }
  form.reset();
};

form.addEventListener("submit", onSubmit);
