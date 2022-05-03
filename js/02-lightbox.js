import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function createMarkupGalleryImg(gallery) {
  const galleryImg = gallery
    .map(({ preview, original, description }) => {
      return `<li>
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li> `;
    })
    .join("");
  galleryEl.insertAdjacentHTML("beforeend", galleryImg);
}
createMarkupGalleryImg(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
// const lightbox = $('.gallery a').simpleLightbox({
//     captionsData: 'alt',
//     captionDelay: 250,
// });
