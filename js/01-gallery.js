import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

function createGal(array) {
  return array.reduce((acc, item) =>  acc + `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`, ''
  );
}

const result = createGal(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', result);

let instance;
function clickImg(evt) {
  evt.preventDefault()
  if (!evt.target.classList.contains('gallery__image')) {
    return
  }
  instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" >
`)

  instance.show((instance) => console.log('finished show()', instance))

  // setTimeout(() => {
  //   instance.close((instance) => console.log('finished close()', instance))
  // }, 3000);

  const esc = 'Escape';
  if (evt.code === esc) {
    instance.close()
  }
}

gallery.addEventListener('click', clickImg);

window.addEventListener('keydown', escapeKeydown);

function escapeKeydown(event) {
  const esc = 'Escape';
  if (event.code === esc) {
    instance.close()
  }
}


// Відмалювати розмітку галереї використовуючи масив
// При рендері галереї потрібно підставити в розмітку правильні поля
// Потрібно навішати клік на галерею використовуючи делегування
// Визначити елемент на який клікнути через event.target
// Считати данні з атрибутом data-source і підставити в модальне вікно
// Має зявитися модальне вікно з картинкою яку отримали з атрибута data-source 