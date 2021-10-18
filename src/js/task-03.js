const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeMarkupImg = ({ url, alt }, itemClassName, imgClassName) =>
  `<li class='${itemClassName}'><img src='${url}' alt='${alt}' class='${imgClassName}'></li>`;

const markup = images
  .map((image) => makeMarkupImg(image, "item", "image"))
  .join("");

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("afterbegin", markup);
