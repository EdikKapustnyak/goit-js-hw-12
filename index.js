import{a as g,S as f,i}from"./assets/vendor-DMjJPMAs.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const v="49320414-34c235123b434a4e0d748057d";function h(t,r=1,s=15){return g.get("https://pixabay.com/api/",{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s}})}const p=document.querySelector(".gallery");function m(t){p.innerHTML="";const r=t.map(o=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${o.largeImageURL}">
                <img src="${o.webformatURL}" alt="${o.tags}" width="360" height="240" />
            </a>
            <div class="description-container">
                <div class="description">
                    <p class="gallery-item-text">Likes</p>
                    <span>${o.likes}</span>
                </div>
                <div class="description">
                    <p class="gallery-item-text">Views</p>
                    <span>${o.views}</span>
                </div>
                <div class="description">
                    <p class="gallery-item-text">Comments</p>
                    <span>${o.comments}</span>
                </div>
                <div class="description">
                    <p class="gallery-item-text">Downloads</p>
                    <span>${o.downloads}</span>
                </div>
            </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",r),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const L=document.querySelector(".form"),c=document.querySelector(".loader"),n=document.querySelector(".load-more"),w=document.querySelector(".gallery");let l=1,u="",y=0;n.classList.add("visually-hidden");L.addEventListener("submit",S);n.addEventListener("click",b);async function S(t){t.preventDefault();const r=document.querySelector('input[name="search-text"]').value.trim();if(r===""){i.show({title:"Error",message:"Please enter a search query!"});return}u=r,l=1,w.innerHTML="",n.classList.add("visually-hidden"),c.classList.remove("visually-hidden");try{const s=await h(u,l);y=s.data.totalHits,s.data.hits.length===0?i.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(m(s.data.hits),s.data.hits.length<y&&n.classList.remove("visually-hidden"))}catch(s){console.error(s),i.show({title:"Error",message:"Sorry, there was an error processing your request. Please try again!"})}finally{c.classList.add("visually-hidden")}}async function b(){l+=1,c.classList.remove("visually-hidden");try{const t=await h(u,l);m(t.data.hits),l*15>=y&&(n.classList.add("visually-hidden"),i.show({title:"Info",message:"We're sorry, but you've reached the end of search results."})),q()}catch(t){console.error(t),i.show({title:"Error",message:"Sorry, there was an error processing your request. Please try again!"})}finally{c.classList.add("visually-hidden")}}function q(){const t=document.querySelector(".gallery-item");if(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
