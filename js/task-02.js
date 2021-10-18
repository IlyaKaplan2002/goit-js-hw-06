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

for (const ingredient of ingredients) {
  list.append(
    makeMarkup({
      tagName: "li",
      content: ingredient,
      className: "item",
    })
  );
}
