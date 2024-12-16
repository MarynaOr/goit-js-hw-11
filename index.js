import{S as p,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="47645708-0e2c2a3797788683efa376261";function L(r){const o=new URLSearchParams({key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${g}?${o}`;return fetch(n).then(a=>{if(!a.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return a.json()})}function S(r){return!Array.isArray(r)||r.length===0?(console.error("Invalid or empty data for createMarkup."),""):r.map(({id:o,largeImageURL:n,webformatURL:a,tags:e,likes:t,views:i,comments:y,downloads:d})=>`
    <li class='item-gallery' data-id='${o}'>
      <a class='link-gallery' href='${n}'>
        <img 
          class='img-gallery'
          src='${a}'
          alt='${e}'
          loading="lazy"
        >
        <ul>
          <li class='info-img'><span>Likes</span>${t}</li>
          <li class='info-img'><span>Views</span>${i}</li>
          <li class='info-img'><span>Comments</span>${y}</li>
          <li class='info-img'><span>Downloads</span>${d}</li>
        </ul>
      </a>
    </li>
    `).join("")}function b(r){r.style.display="block"}function c(r){r.style.display="none"}const w=new p(".item-gallery a",{captionsData:"alt",captionDelay:300,className:"bg-color"}),m=document.querySelector(".form");document.querySelector(".btn");const u=document.querySelector(".gallery");m.querySelector("label input");const l=document.querySelector(".load");m.addEventListener("submit",q);let s="";function q(r){if(r.preventDefault(),s=r.target.elements.search.value.trim(),s===""){c(l),f.warning({title:"Caution",message:"The field is empty, please type your request"});return}s&&b(l),L(s).then(o=>{if(o.total===0)throw u.innerHTML="",new Error;return c(l),o.hits}).then(o=>{u.innerHTML="",c(l),u.innerHTML=S(o),s="",w.refresh()}).catch(()=>{f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}
//# sourceMappingURL=index.js.map
