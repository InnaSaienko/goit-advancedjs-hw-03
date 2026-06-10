import{S as d,i,a as c}from"./assets/vendor-DK-xFqxO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const f="Sorry, there are no images matching your search query. Please try again!",m="Sorry, no images match your search. Try again!",p=new d(".gallery a"),u=document.querySelector(".gallery"),l=e=>{const n={title:e==="warning"?m:f,position:"topCenter",timeout:5e3};return e==="warning"?i.warning(n):i.error(n)};function y(){const e=document.createElement("div");return e.classList.add("loader"),e.textContent="Loading images, please wait...",document.body.appendChild(e),e}function g(){document.querySelector(".loader").remove()}function h(e){const n=e.map(r=>`<li class="gallery-item">
        <a href=${r.largeImageURL} class="gallery-link">
          <img
            class="gallery-image"
            src=${r.webformatURL}
            alt=${r.tags}
            loading="lazy"
          />
        </a>
         <ul class="image-info">
           <li class="info-item">Likes: <span>${r.likes}</span></li>
           <li class="info-item">Views: <span>${r.views}</span></li>
           <li class="info-item">Comments: <span>${r.comments}</span></li>
           <li class="info-item">Download: <span>${r.downloads}</span></li>
         </ul>
      </li>`).join("");u.insertAdjacentHTML("beforeend",n),p.refresh()}function w(){u.innerHTML=""}c.defaults.baseURL="https://pixabay.com/api/";const L=void 0;async function b(e){return(await c.get(_,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const S=document.querySelector("form");S.addEventListener("submit",v);async function v(e){e.preventDefault();const n=e.target.elements["search-text"].value.trim();if(n){w(),y();try{const r=await b(n);if(r.hits.length===0){l("warning");return}h(r.hits)}catch{l("error")}finally{g()}}}
//# sourceMappingURL=index.js.map
