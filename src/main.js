import { hideLoader, showLoader, showToast } from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';

const form = document.querySelector("form");

form.addEventListener("submit", onSubmit);



async function onSubmit(e) {
  e.preventDefault();
  const query = e.target.elements["search-text"].value.trim();
  if (!query) return;

  showLoader();
  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      showToast("warning");
      return;
    }
    render(data.hits);
  } catch (error) {
    showToast("error");
  } finally {
    hideLoader();
  }
}