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

export function showLoader() {}

export function hideLoader() {}

