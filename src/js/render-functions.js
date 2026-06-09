import iziToast from "izitoast";

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

