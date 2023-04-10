// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// 1. Create markup

const galleryContainer = document.querySelector(`.gallery`);

 const markup = galleryItems.map(({preview, original, description}) => {
     return `
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    ` }).join(''); 
 
 galleryContainer.insertAdjacentHTML('beforeend', markup);
// 2. Delegation

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick (evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }   
};
// 3. SimpleLightbox implementation

let lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250,
    captionsData: 'alt',
 });
 lightbox.on('show.simplelightbox');