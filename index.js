import{S as m,i as p,a as d}from"./assets/vendor-BTRK9AdA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const f={warning:"Sorry, there are no images matching your search query. Please try again!",error:"An error occurred. Please try again later."},i=`<svg class='icon-arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>`,l=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),u=document.querySelector(".gallery"),c=e=>{const t={title:e==="warning"?"No Images Found":"Error",message:f[e],position:"topRight",timeout:5e7};return p[e==="warning"?"warning":"error"](t)};function g(){const e=document.createElement("div");e.classList.add("loader-wrapper");const t=document.createElement("span");t.classList.add("loader"),e.appendChild(t),document.body.appendChild(e)}function y(){document.querySelector(".loader-wrapper").remove()}function h(){const e=document.querySelector(".sl-prev"),t=document.querySelector(".sl-next");e&&(e.innerHTML=i,e.querySelector("svg").style.transform="rotate(180deg)"),t&&(t.innerHTML=i)}function w(e){const t=e.map(o=>`<li class="gallery-item">
        <a href=${o.largeImageURL} class="gallery-link">
          <img
            class="gallery-image"
            src=${o.webformatURL}
            alt="${o.tags}"
            loading="lazy"
          />
        </a>
         <ul class="image-info">
           <li class="info-item">Likes: <span>${o.likes}</span></li>
           <li class="info-item">Views: <span>${o.views}</span></li>
           <li class="info-item">Comments: <span>${o.comments}</span></li>
           <li class="info-item">Download: <span>${o.downloads}</span></li>
         </ul>
      </li>`).join("");u.insertAdjacentHTML("beforeend",t),l.on("shown.simplelightbox",h),l.refresh()}function b(){u.innerHTML=""}d.defaults.baseURL="https://pixabay.com/api/";const L="56231969-297dd38bb6be8c9e539b262b2";async function v(e){return(await d.get("",{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const S=document.querySelector("form");S.addEventListener("submit",q);async function q(e){e.preventDefault();const t=e.target.elements["search-text"].value.trim();b(),g();try{const o=await v(t);if(o.hits.length===0){c("warning");return}w(o.hits)}catch{c("error")}finally{y()}}
//# sourceMappingURL=index.js.map
