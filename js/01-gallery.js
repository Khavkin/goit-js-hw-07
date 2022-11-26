import { galleryItems } from './gallery-items.js';
// Change code below this line
import 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';

const gallery = document.querySelector('.gallery');

const addStyleSheet = fileName => {
  const head = document.head;
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = fileName;

  head.appendChild(link);
};

const showOriginalImage = event => {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);

    gallery.addEventListener(
      'keyup',
      event => {
        if (event.key === 'Escape') instance.close();
      },
      { once: true }
    );

    instance.show();
  }
};

addStyleSheet('https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css');

gallery.addEventListener('click', showOriginalImage);

const createGallery = () => {
  const result = [...galleryItems].reduce((markup, { preview, original, description }) => {
    return (
      markup +
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    );
  }, '');

  gallery.insertAdjacentHTML('afterbegin', result);
};

createGallery();

console.log(galleryItems);
