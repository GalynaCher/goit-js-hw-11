import{S as f,i as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function g(t){const l=`https://pixabay.com/api/?${new URLSearchParams({key:"43557588-360f3c0dbe3221038cf66573a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(l)}const h=new f(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250,captionType:"attr"});function v(t){let s=document.querySelector("ul.gallery-ul");s.innerHTML="";const l=t.map(({webformatURL:i,largeImageURL:e,tags:r,likes:o,views:p,comments:y,downloads:m})=>`    <li class="gallery-item">
                        <div class="gallery">
                            <a class="gallery-link" href="${e}" >
                                <img class="gallery-image" src="${i}" data-source="${e}" alt="${r}" />
                            </a>
                        </div>    
                        <div class="gallery-props">
                            <div class="gallery-props-item">
                                Likes
                                    <div class="gallery-props-number">${o}</div>
                            </div>
                            <div class="gallery-props-item">
                                Views
                                    <div class="gallery-props-number">${p}</div>
                            </div>
                            <div class="gallery-props-item">
                                Comments
                                    <div class="gallery-props-number">${y}</div>
                            </div>
                            <div class="gallery-props-item">
                                Downloads
                                    <div class="gallery-props-number">${m}</div>
                            </div>
                        </div>
                    </li>`).join("");s.insertAdjacentHTML("afterbegin",l),h.refresh()}const c=document.querySelector(".search-block-field"),b=document.querySelector(".search-block-button"),n=document.querySelector(".loader");let u=document.querySelector("ul.gallery-ul"),a="";c.addEventListener("input",()=>{a=c.value});b.addEventListener("click",()=>{if(n.style.display="block",a.trim())u.innerHTML="",g(a).then(t=>(c.value="",t.json())).then(t=>{if(t.total===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none",a="";return}else v(t.hits.flat()),n.style.display="none",a=""}).catch(t=>console.error(t));else{d.error({title:"Error",message:"Search field cannot be empty"}),u.innerHTML="",n.style.display="none";return}});
//# sourceMappingURL=commonHelpers.js.map
