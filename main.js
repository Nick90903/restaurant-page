(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{R:()=>n});const t=()=>{n(),console.log("drawMenu Clicked")};function n(){const e=document.querySelectorAll(".container");null!=e&&e.forEach((e=>{e.remove()}))}!function(){const e=document.querySelector(".content");console.log(e);const o=document.createElement("div"),c=document.createElement("button"),d=document.createElement("button"),a=document.createElement("button"),s=document.createElement("div");s.classList.add("button-Container");const i=document.createElement("h2");i.textContent="Tom's Pizza Pen",i.classList.add("title"),o.appendChild(i),o.classList.add("header-Container"),c.textContent="Home",c.classList.add("home-Buton"),c.addEventListener("click",(function(){(()=>{console.log("Home Clicked"),n();const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("container");const o=document.createElement("div");o.classList.add("body-Content");const c=document.createElement("p");c.classList.add("sell-Point"),c.textContent="Rated #1 in the county by 3 different groups!";const d=document.createElement("p");d.classList.add("founded"),d.textContent="Founded 1891";const a=document.createElement("img");a.classList.add("pizza-Cook"),a.src="resources/images/pizzacook.jpg";const s=document.createElement("p");s.classList.add("CTA"),s.textContent="Visit Us In Person!",o.appendChild(c),o.appendChild(d),o.appendChild(a),o.appendChild(s),t.appendChild(o),t.appendChild((()=>{const e=document.createElement("div");e.classList.add("footer-Container");const t=document.createElement("p");return t.innerHTML='Copyright 2022 <a href="https://github.com/Nick90903">Nick90903</a>',e.appendChild(t),e})()),e.appendChild(t)})()})),s.appendChild(c),d.textContent="Menu",d.classList.add("menu-Button"),d.addEventListener("click",(function(){t()})),s.appendChild(d),a.textContent="Contact Us",a.classList.add("contact-Button"),a.addEventListener("click",(function(){})),s.appendChild(a),console.log(o),o.appendChild(s),e.appendChild(o)}(),t()})();