import{S as u,i as d,a as l}from"./assets/vendor-BN-uVwaw.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const f={warning:"Sorry, there are no images matching your search query. Please try again!",error:"An error occurred. Please try again later."},m=new u(".gallery a"),c=document.querySelector(".gallery"),i=e=>{const n={title:e==="warning"?"No Images Found":"Error",message:f[e],position:"topRight",timeout:5e3};return d[e==="warning"?"warning":"error"](n)};function p(){const e=document.createElement("div");e.classList.add("loader"),e.textContent="Loading images, please wait...",document.body.appendChild(e)}function g(){document.querySelector(".loader").remove()}function y(e){const n=e.map(r=>`<li class="gallery-item">
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
      </li>`).join("");c.insertAdjacentHTML("beforeend",n),m.refresh()}function h(){c.innerHTML=""}l.defaults.baseURL="https://pixabay.com/api/";const w=void 0;async function L(e){return(await l.get("",{params:{key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const b=document.querySelector("form");b.addEventListener("submit",v);async function v(e){e.preventDefault();const n=e.target.elements["search-text"].value.trim();h(),p();try{const r=await L(n);if(r.hits.length===0){i("warning");return}y(r.hits)}catch{i("error")}finally{g()}}
//# sourceMappingURL=index.js.map
