import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';

//Show message form according state
const errorMessage = 'Sorry, there are no images matching your search query. Please try again!';
const warningMessage = 'Sorry, no images match your search. Try again!';

const lightbox = new SimpleLightbox('.gallery a');
const gallery = document.querySelector('.gallery');

export const showToast = (messageType) => {
  const config = {
    title: messageType === 'warning' ? warningMessage : errorMessage,
    position: 'topRight',
    timeout: 5000000,
  };
  return messageType === 'warning' ? iziToast.warning(config) : iziToast.error(config);

};

export function showLoader() {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  loader.textContent = 'Loading images, please wait...';
  document.body.appendChild(loader);
  return loader;

}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.remove();
}

export function createGallery(images) {
  const markUp = images.map(image => {
    return `<li class="gallery-item">
        <a href=${image.largeImageURL} class="gallery-link">
          <img
            class="gallery-image"
            src=${image.webformatURL}
            alt=${image.tags}
            loading="lazy"
          />
        </a>
         <ul class="image-info">
           <li class="info-item">Likes: <span>${image.likes}</span></li>
           <li class="info-item">Views: <span>${image.views}</span></li>
           <li class="info-item">Comments: <span>${image.comments}</span></li>
           <li class="info-item">Download: <span>${image.downloads}</span></li>
         </ul>
      </li>`;
  }).join('');

  gallery.insertAdjacentHTML('beforeend', markUp);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}