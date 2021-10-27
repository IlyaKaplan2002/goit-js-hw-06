const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function makeMarkup({ tagName, content, className }) {
  // const elem = document.createElement(tagName);
  // elem.textContent = content;
  // elem.classList.add(className);
  // return elem;
  return `<${tagName} class='${className}'>${content}</${tagName}>`;
}

const list = document.querySelector("ul#ingredients");

let markup = "";
for (const ingredient of ingredients) {
  // list.append(
  //   makeMarkup({
  //     tagName: "li",
  //     content: ingredient,
  //     className: "item",
  //   })
  // );
  markup += makeMarkup({
    tagName: "li",
    content: ingredient,
    className: "item",
  });
}

list.innerHTML = markup;
