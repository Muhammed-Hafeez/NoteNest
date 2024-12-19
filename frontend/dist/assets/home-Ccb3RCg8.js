var N=Object.defineProperty;var A=(t,r,e)=>r in t?N(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var i=(t,r,e)=>A(t,typeof r!="symbol"?r+"":r,e);import"./icons-bHJw5qYK.js";import{t as c,n as k}from"./notes-CT7F2GOp.js";import"./Footer-CaaJWQBV.js";function D(t){switch(t+1){case 1:return"monday";case 2:return"tuesday";case 3:return"wednesday";case 4:return"thursday";case 5:return"friday";case 6:return"saturday";case 7:return"sunday";default:return NaN}}function v(t){switch(t+1){case 1:return"January";case 2:return"February";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December";default:return NaN}}function p(t){t.style.backgroundColor="#000",t.style.color="#fff"}function w(t){t.style.backgroundColor="#fff",t.style.color="#000"}function b(t){document.querySelectorAll(`[${t}]`).forEach(r=>{r.removeAttribute(t),w(r)})}const L=(t,r,e)=>t.getAttribute(e)===r?(w(t),t.setAttribute(e,""),!1):(p(t),t.setAttribute(e,r),!0),S=document.querySelector("#notes"),h=100;function l(t,r){t.map(e=>{r==null||r.insertAdjacentHTML("beforeend",`
        <span class="m-2 rounded-xl p-4 h-fit hover:cursor-pointer" style="background-color:${e.color};" data-notes-id="${e.id}">
          <h2 class="text-xl font-bold">${e.title}</h2>
          <p class="text-sm w-full">
            ${e.body.length>h?e.body.slice(0,h).concat("..."):e.body}
          </p>
        </span>
        `)})}l(c,S);document.querySelectorAll("[data-notes-id]").forEach(t=>{t.addEventListener("click",T)});function T(t){t.stopPropagation();const e=t.currentTarget.getAttribute("data-notes-id");if(e==null)return;const n=new URL(window.location.href),o=new URLSearchParams(n.search);n.pathname="/notes",o.set("id",e),n.search=o.toString(),window.history.pushState({},"",n),window.location.reload()}const d=document.querySelector("#date");c.map((t,r)=>{const e=t.reviewDate;if(e==null)return;const n=new Date(e);let o=D(n.getDay()),a=v(n.getMonth());typeof o=="number"&&(o="NaN"),typeof a=="number"&&(a="NaN"),!(r>7)&&(d==null||d.insertAdjacentHTML("beforeend",`
        <button
          class="date hover:bg-black rounded-2xl p-3 hover:text-white text-center bg-white border-2 border-black text-black transition-all duration-200 min-w-[60px] w-full"
          data-date="${t.reviewDate}" data-date-clicked=""
        >
          <p class="text-sm font-light md:text-lg">${o.slice(0,3)}</p> <!-- Display short day name -->
          <p class="text-xl md:text-2xl">${n.getDate()}</p> <!-- Display the day number -->
          <p class="text-sm font-light md:text-lg">${a.slice(0,3)}</p> <!-- Display short month name -->
        </button>
    `))});function E(t){const r=document.getElementById("notes"),e=t.currentTarget,n=e.getAttribute("data-date");if(t.stopPropagation(),e.getAttribute("clicked")==="true"){b("clicked"),l(c,r);return}if(b("clicked"),e.setAttribute("clicked","true"),p(e),t.currentTarget===null)return console.error("Date target is null");const o=c.filter(a=>a.reviewDate===n);r.innerHTML="",l(o,r)}const $=document.querySelectorAll("[data-date]");$.forEach(t=>{t.addEventListener("click",E)});const s=class s{constructor(){i(this,"updateFilteredNotes",(r,e)=>(r?c.filter(n=>n.tag===e).forEach(n=>{s.filteredNotes.push(n)}):s.filteredNotes=s.filteredNotes.filter(n=>n.tag!==e),s.filteredNotes.length<=0?c:s.filteredNotes))}};i(s,"filteredNotes",[]);let y=s;const f=document.querySelector("#tags"),g=document.querySelector("#notes"),x=new Set;for(const t of k)x.add(t.tag);const q=Array.from(x);q.map(t=>{f==null||f.insertAdjacentHTML("beforeend",` <button
          class="border-2 hover:bg-black focus:bg-black hover:text-white focus:text-white rounded-xl py-2 px-4 border-gray-400 focus:border-black " data-tag=""
        >
         ${t}
        </button>`)});document.querySelectorAll("[data-tag]").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const e=r.currentTarget,n=L(e,"clicked","data-tag");let a=new y().updateFilteredNotes(n,e.innerText);g.innerHTML="",l(a,g)})});const u=document.querySelector("#notes"),m=document.querySelector("#filterNotes");m==null||m.addEventListener("input",t=>{const r=t.target;if(r===null||u===null)return;const e=r.value,n=RegExp(`(${e})`,"gim"),o=c.filter(a=>a.title.match(n));u.innerHTML="",o.length!==0?l(o,u):u.innerHTML='<h1 class="font-bold text-2xl md:text-4xl w-fit">Notes not found</h1>'});
