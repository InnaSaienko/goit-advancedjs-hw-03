import{i,S as l,a as d}from"./assets/vendor-DK-xFqxO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const m="Sorry, there are no images matching your search query. Please try again!",u="Sorry, no images match your search. Try again!",c=t=>{const r={title:t==="warning"?u:m,message:`${message}`,position:"topCenter",timeout:5e3};return t==="warning"?i.warning(r):i.error(r)};function f(){const t=document.createElement("div");return t.classList.add("loader"),t.textContent="Loading images, please wait...",document.body.appendChild(t),t}function g(){document.querySelector(".loader").remove()}function p(t){const r=document.createElement("div"),n=t.map(e=>`<li className="gallery-item">
      <a href={image.largeImageURL} className="gallery-link">
        <img
          src={image.webformatURL}
          alt={image.tags}
          className="gallery-image"
        />
        <div className="image-info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </a>
    </li>`).join("");r.insertAdjacentHTML("beforeend",n),new l(".gallery a").refresh()}const y="https://pixabay.com/api/",h=void 0;async function b(t){return(await d.get(y,{params:{key:h,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const w=document.querySelector("form");w.addEventListener("submit",L);async function L(t){t.preventDefault();const r=t.target.elements["search-text"].value.trim();if(r){f();try{const n=await b(r);if(n.hits.length===0){c("warning");return}p(n.hits)}catch{c("error")}finally{g()}}}
//# sourceMappingURL=index.js.map
