import { galleryItems } from './gallery-items.js';
// Change code below this line
import 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.11.0/simple-lightbox.min.js';

const gallery = document.querySelector('.gallery');

const addStyleSheet = fileName => {
  // add stylesheet to page

  const head = document.head;
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = fileName;

  head.appendChild(link);
};

const createGallery = () => {
  const result = [...galleryItems].reduce((markup, { preview, original, description }) => {
    return (
      markup +
      `<a class="gallery__item" href="${original}"> 
            <img class="gallery__image" src="${preview}" alt="${description}" /> 
        </a>`
    );
  }, '');

  gallery.insertAdjacentHTML('afterbegin', result);
};

createGallery();

addStyleSheet('https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.11.0/simple-lightbox.css');

const galleryBox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });

console.log(galleryItems);
