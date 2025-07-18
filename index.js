import{a as u,S as d,i as l}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function f(s){const r="https://pixabay.com/api/",t="51376932-00c07b39d8c117a87ed229cff",i=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(r,{params:i}).then(e=>e.data.hits).catch(e=>{throw console.log(e),e})}const c=document.querySelector(".gallery");let n=null;function p(s){const r=s.map(t=>`<li class = "gallery-item"><a href = "${t.largeImageURL}"><img class = "gallery-img" src = "${t.webformatURL}" alt = "${t.tags}"> </a> 
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
          
  </li>`).join("");c.innerHTML=r,n?n.refresh():n=new d(".gallery a",{captionDelay:250})}function m(){c.innerHTML=""}function g(){document.querySelector(".loader").classList.add("is-hidden")}function h(){document.querySelector(".loader").classList.remove("is-hidden")}const y=document.querySelector(".form"),v=s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(r===""){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(),h(),f(r).then(t=>{if(!t.length){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t)}).catch(t=>console.log(t)).finally(()=>g())};y.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
