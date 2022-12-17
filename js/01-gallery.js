import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const imagesMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
       <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
       </a>
       </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", imagesMarkup);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  // Check if this is a picture👀
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imgOriginal = event.target.getAttribute("data-source");
  const imgCreated = basicLightbox.create(`<img src = "${imgOriginal}"/>`);

  imgCreated.show();

  //close with Esc
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") imgCreated.close();
  });
});

console.log(galleryItems);

// console.log(basicLightbox);
