const categoriesList = document.querySelector("ul#categories");

const categories = categoriesList.children;
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  const title = category.firstElementChild.textContent;
  const elements = category.lastElementChild.children;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
}
