import{a as u,S as d,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function f(r){const t="https://pixabay.com/api/",s="51376932-00c07b39d8c117a87ed229cff",i=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(t,{params:i}).then(e=>e.data).catch(e=>{throw console.log(e),e})}function m(r){return r.map(t=>`<li class = "gallery-item"><a href = "${t.largeImageURL}"><img class = "gallery-img" src = "${t.webformatURL}" alt = "${t.tags}"> </a> 
       <div class="info">
    <div class="info-item">
      <p class="info-title">Likes</p>
      <p class="info-value"> ${t.likes}</p>
    </div>
    <div class="info-item">
      <p class="info-title">Views</p>
      <p class="info-value">${t.views}</p>
    </div>
    <div class="info-item">
      <p class="info-title">Comments</p>
      <p class="info-value">${t.comments}</p>
    </div>
    <div class="info-item">
      <p class="info-title">Downloads</p>
      <p class="info-value">${t.downloads}</p>
    </div>
  </div>
          
  </li>`).join("")}function p(){const r=document.querySelector(".gallery");r.innerHTML=""}function l(){document.querySelector(".loader").classList.add("is-hidden")}function g(){document.querySelector(".loader").classList.remove("is-hidden")}const y=new d(".gallery a");function h(){y.refresh()}const c={form:document.querySelector(".form"),gallery:document.querySelector(".gallery")},v=r=>{r.preventDefault(),p(),g();const t=r.target.elements["search-text"].value.trim();if(t===""){l(),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(t).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.gallery.innerHTML=m(s.hits),h()}).catch(s=>console.log(s)).finally(()=>l())};c.form.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
