import{i,S as d,a as l}from"./assets/vendor-DK-xFqxO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const m="Sorry, there are no images matching your search query. Please try again!",u="Sorry, no images match your search. Try again!",c=t=>{const r={title:t==="warning"?u:m,message:`${message}`,position:"topCenter",timeout:5e3};return t==="warning"?i.warning(r):i.error(r)};function f(){const t=document.createElement("div");return t.classList.add("loader"),t.textContent="Loading images, please wait...",document.body.appendChild(t),t}function g(){document.querySelector(".loader").remove()}function p(t){const r=document.createElement("div"),a=t.map(e=>`<li className="gallery-item">
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
    </li>`).join("");r.insertAdjacentHTML("beforeend",a),new d(".gallery a").refresh()}l.defaults.baseURL="https://pixabay.com/api/";const y=void 0;async function h(t){return(await l.get(_,{params:{key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const b=document.querySelector("form");b.addEventListener("submit",w);async function w(t){t.preventDefault();const r=t.target.elements["search-text"].value.trim();if(r){f();try{const a=await h(r);if(a.hits.length===0){c("warning");return}p(a.hits)}catch{c("error")}finally{g()}}}
//# sourceMappingURL=index.js.map
