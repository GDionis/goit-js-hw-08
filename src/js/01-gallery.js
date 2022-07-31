import { galleryItems } from '../js/gallery-items';
import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.min.css";
function createGal(array) {
  return array.reduce((acc, item) =>  acc + `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`, ''
  );
}

const result = createGal(galleryItems);

let gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', result);

 gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});