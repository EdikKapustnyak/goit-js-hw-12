import{a as f,S as g,i}from"./assets/vendor-DMjJPMAs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const v="49320414-34c235123b434a4e0d748057d";function h(a,t=1,r=15){return f.get("https://pixabay.com/api/",{params:{key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:r}})}const p=document.querySelector(".gallery");function m(a){p.innerHTML="";const t=a.map(o=>`
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
        </li>`).join("");p.insertAdjacentHTML("beforeend",t),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const L=document.querySelector(".form"),c=document.querySelector(".loader"),n=document.querySelector(".load-more"),w=document.querySelector(".gallery");let l=1,u="",y=0;n.classList.add("visually-hidden");L.addEventListener("submit",b);n.addEventListener("click",q);async function b(a){a.preventDefault();const t=document.querySelector('input[name="search-text"]').value.trim();if(t===""){i.show({title:"Error",message:"Please enter a search query!"});return}u=t,l=1,w.innerHTML="",n.classList.add("visually-hidden"),c.classList.remove("visually-hidden");try{const r=await h(u,l);y=r.data.totalHits,r.data.hits.length===0?i.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(m(r.data.hits),r.data.hits.length<y&&n.classList.remove("visually-hidden"))}catch(r){console.error(r),i.show({title:"Error",message:"Sorry, there was an error processing your request. Please try again!"})}finally{c.classList.add("visually-hidden")}}async function q(){l+=1,c.classList.remove("visually-hidden");try{const a=await h(u,l);m(a.data.hits),l*15>=y&&(n.classList.add("visually-hidden"),i.show({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch(a){console.error(a),i.show({title:"Error",message:"Sorry, there was an error processing your request. Please try again!"})}finally{c.classList.add("visually-hidden")}}
//# sourceMappingURL=index.js.map
