let counterValue = 0;

const value = document.querySelector("span#value");
const changeValue = () => (value.textContent = counterValue);

const decBtn = document.querySelector("button[data-action='decrement']");
const incBtn = document.querySelector("button[data-action='increment']");

const minus = () => {
  counterValue = counterValue - 1;
  changeValue();
};
const plus = () => {
  counterValue += 1;
  changeValue();
};

decBtn.addEventListener("click", minus);
incBtn.addEventListener("click", plus);
