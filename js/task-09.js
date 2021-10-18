function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector("button.change-color");
const text = document.querySelector(".color");

const onClick = () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  text.innerHTML = newColor;
};

btn.addEventListener("click", onClick);
