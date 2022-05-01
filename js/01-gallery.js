import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

function createMarkupGalleryImg(gallary){
  
  const galleryImg = gallary.map(({ preview, description, original }) => {

   return `<a class="gallery__link" href="${original}">
    <img  class="gallery__image"
    src="${preview}" 
    data-source="${original}" 
    alt="${description}" />
    </a>`
  }
  ).join('');

  galleryEl.insertAdjacentHTML("afterbegin", galleryImg);
 }

createMarkupGalleryImg(galleryItems);  


 galleryEl.addEventListener('click', onGalleryBoxClick);

function onGalleryBoxClick(event) {
  event.preventDefault();
  
    const originalImage = event.target.classList.contains('gallery__image');
  if (!originalImage) {
    return;
  } else {
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
         `);
    instance.show();
    console.log(event.target.dataset.source);
    
  }
}






