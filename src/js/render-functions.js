import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

//Show message form according state
const errorMessage = "Sorry, there are no images matching your search query. Please try again!";
const warningMessage = "Sorry, no images match your search. Try again!";

export const showToast = (messageType) => {
  const config = {
    title: messageType === "warning" ? warningMessage : errorMessage,
    message: `${message}`,
    position: 'topCenter',
    timeout: 5000,
  }
  return messageType === 'warning' ? iziToast.warning(config) : iziToast.error(config);

}

export function showLoader() {
  const loader = document.createElement("div");
  loader.classList.add("loader");
  loader.textContent = "Loading images, please wait...";
  document.body.appendChild(loader);
  return loader;
}

export function hideLoader() {
  const loader = document.querySelector(".loader");
  loader.remove();
}

export function createGallery(images) {
  const gallery = document.createElement("div");
  const markUp = images.map(image =>
    `<li className="gallery-item">
      <a href={image.largeImageURL} className="gallery-link">
        <img
          src={image.webformatURL}
          alt={image.tags}
          className="gallery-image"
        />
        <div className="image-info">
          <p><b>Likes:</b> ${image.likes}</p>
          <p><b>Views:</b> ${image.views}</p>
          <p><b>Comments:</b> ${image.comments}</p>
          <p><b>Downloads:</b> ${image.downloads}</p>
        </div>
      </a>
    </li>`
  ).join("");

  gallery.insertAdjacentHTML("beforeend", markUp);
  const lightbox = new SimpleLightbox(".gallery a");
  lightbox.refresh();
}

export function clearGallery() {
}