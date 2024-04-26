import{S as h,i as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function d(o,s){const r=`https://pixabay.com/api/?${new URLSearchParams({key:"43557588-360f3c0dbe3221038cf66573a",q:o,page:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(r)}function v(o){let s=document.querySelector("ul.gallery-ul");s.innerHTML="";const l=o.map(({webformatURL:r,largeImageURL:e,tags:t,likes:i,views:y,comments:f,downloads:g})=>`    <li class="gallery-item">
                        <div class="gallery">
                            <a class="gallery-link" href="${e}" >
                                <img class="gallery-image" src="${r}" data-source="${e}" alt="${t}" />
                            </a>
                        </div>    
                        <div class="gallery-props">
                            <div class="gallery-props-item">
                                Likes
                                    <div class="gallery-props-number">${i}</div>
                            </div>
                            <div class="gallery-props-item">
                                Views
                                    <div class="gallery-props-number">${y}</div>
                            </div>
                            <div class="gallery-props-item">
                                Comments
                                    <div class="gallery-props-number">${f}</div>
                            </div>
                            <div class="gallery-props-item">
                                Downloads
                                    <div class="gallery-props-number">${g}</div>
                            </div>
                        </div>
                    </li>`).join("");s.insertAdjacentHTML("afterbegin",l),s=new h(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250,captionType:"attr"}),s.refresh()}const c=document.querySelector(".search-block-field"),b=document.querySelector(".search-block-button"),p=document.querySelector(".loader");let m=document.querySelector("ul.gallery-ul"),a="",n;c.addEventListener("input",()=>{a=c.value});b.addEventListener("click",()=>{if(a.trim())m.innerHTML="",d(a).then(o=>(c.value="",o.json())).then(o=>{if(o.total===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a="";return}p.style.display="block",o.total;const s=5,l=[];for(n=1;n<=s;n++)l.push(d(a,n).then(r=>r.json()).then(r=>r.hits));Promise.all(l).then(r=>{v(r.flat()),p.style.display="none",a=""}).catch(r=>console.log(r))}).catch(o=>console.error(o));else{u.error({title:"Error",message:"Search field cannot be empty"}),m.innerHTML="";return}});
//# sourceMappingURL=commonHelpers.js.map
