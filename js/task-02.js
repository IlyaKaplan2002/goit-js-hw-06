const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function makeMarkup({ tagName, content, className }) {
  const elem = document.createElement(tagName);
  elem.textContent = content;
  elem.classList.add(className);
  return elem;
}

const list = document.querySelector("ul#ingredients");

const fragment = document.createDocumentFragment();
for (const ingredient of ingredients) {
  fragment.appendChild(
    makeMarkup({
      tagName: "li",
      content: ingredient,
      className: "item",
    })
  );
}

list.appendChild(fragment);
