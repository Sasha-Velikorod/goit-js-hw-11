import{S as u,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function f(t){const r="https://pixabay.com/api/",s="51376932-00c07b39d8c117a87ed229cff",i=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function d(t){return t.map(r=>`<li class = "gallery-item"><a href = "${r.largeImageURL}"><img class = "gallery-img" src = "${r.webformatURL}" alt = "${r.tags}"> </a> 
       <div class="info">
    <div class="info-item">
      <p class="info-title">Likes</p>
      <p class="info-value"> ${r.likes}</p>
    </div>
    <div class="info-item">
      <p class="info-title">Views</p>
      <p class="info-value">${r.views}</p>
    </div>
    <div class="info-item">
      <p class="info-title">Comments</p>
      <p class="info-value">${r.comments}</p>
    </div>
    <div class="info-item">
      <p class="info-title">Downloads</p>
      <p class="info-value">${r.downloads}</p>
    </div>
  </div>
          
  </li>`).join("")}function m(){const t=document.querySelector(".gallery");t.innerHTML=""}function l(){document.querySelector(".loader").classList.add("is-hidden")}function p(){document.querySelector(".loader").classList.remove("is-hidden")}const y=new u(".gallery a");function g(){y.refresh()}const c={form:document.querySelector(".form"),gallery:document.querySelector(".gallery")},h=t=>{t.preventDefault(),m(),p();const r=t.target.elements["search-text"].value.trim();if(r===""){l(),n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}f(r).then(s=>{if(s.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.gallery.innerHTML=d(s.hits),g()}).catch(s=>console.log(s)).finally(()=>l())};c.form.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
