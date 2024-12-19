(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const s=document.getElementById("Navbar"),c=[{page:"main",link:"/"},{page:"home",link:"/home"},{page:"login",link:"/login"},{page:"register",link:"/signup"}];if(s===null)throw new Error("Navbar is null");s.innerHTML=`
 <nav
      class="flex bg-black text-white w-fit p-4 rounded-full m-4 fixed z-40 right-0 cursor-pointer bottom-10 border-2 border-white"
      id="navMenu"
    >
      <div class="menu"></div>
</nav>
    <div
      class="bg-black w-full h-full text-white  -translate-x-full transition-transform duration-200 sm:w-1/2 md:w-1/4 fixed top-0 z-20"
      id="menuBar"
    >
      <ul class="relative top-20 p-4" id="sideMenuUl">
      </ul>
    </div>
`;c.forEach(r=>{var n;(n=document.getElementById("sideMenuUl"))==null||n.insertAdjacentHTML("beforeend",`
          <li class="border-b-white border-b-2 p-2">
            <a href="${r.link}">${r.page}</a>
          </li>
        `)});const o=document.getElementById("navMenu");o==null||o.addEventListener("click",()=>{var r;(r=document.querySelector("#menuBar"))==null||r.classList.toggle("-translate-x-full")});
