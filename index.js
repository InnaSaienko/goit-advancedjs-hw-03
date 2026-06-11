import{S as f,i as m,a as u}from"./assets/vendor-BTRK9AdA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const p={warning:"Sorry, there are no images matching your search query. Please try again!",error:"An error occurred. Please try again later."},i=`<svg class='icon-arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>`,l=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d=document.querySelector(".gallery"),c=e=>{const o={title:e==="warning"?"No Images Found":"Error",message:p[e],position:"topRight",timeout:5e3};return m[e==="warning"?"warning":"error"](o)};function g(){const e=document.createElement("div");e.classList.add("loader"),e.textContent="Loading images, please wait...",document.body.appendChild(e)}function y(){document.querySelector(".loader").remove()}function h(){const e=document.querySelector(".sl-prev"),o=document.querySelector(".sl-next");e&&(e.innerHTML=i,e.querySelector("svg").style.transform="rotate(180deg)"),o&&(o.innerHTML=i)}function w(e){const o=e.map(r=>`<li class="gallery-item">
        <a href=${r.largeImageURL} class="gallery-link">
          <img
            class="gallery-image"
            src=${r.webformatURL}
            alt="${r.tags}"
            loading="lazy"
          />
        </a>
         <ul class="image-info">
           <li class="info-item">Likes: <span>${r.likes}</span></li>
           <li class="info-item">Views: <span>${r.views}</span></li>
           <li class="info-item">Comments: <span>${r.comments}</span></li>
           <li class="info-item">Download: <span>${r.downloads}</span></li>
         </ul>
      </li>`).join("");d.insertAdjacentHTML("beforeend",o),l.on("shown.simplelightbox",h),l.refresh()}function L(){d.innerHTML=""}u.defaults.baseURL="https://pixabay.com/api/";const v=void 0;async function b(e){return(await u.get("",{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const x=document.querySelector("form");x.addEventListener("submit",S);async function S(e){e.preventDefault();const o=e.target.elements["search-text"].value.trim();L(),g();try{const r=await b(o);if(r.hits.length===0){c("warning");return}w(r.hits)}catch{c("error")}finally{y()}}
//# sourceMappingURL=index.js.map
