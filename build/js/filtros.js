function ocultarElementos(){const e=document.querySelectorAll(".filtros_herramienta-nombre i"),t=document.querySelectorAll(".filtros_herramienta-precio i");e.forEach(e=>{e.style.display="none"}),t.forEach(e=>{e.style.display="none"})}function aplicarFiltro(e,t){"inline"==t[0].style.display?orden="ascendente":orden="descendente";const o=document.querySelectorAll(".productos-pagina").length;let r=[];for(let e=0;e<o;e++){const e=document.createElement("DIV");e.classList.add("productos-pagina"),r.push(e)}const l=Array.from(document.querySelectorAll(".producto"));l.sort((t,o)=>{if("titulo"===e)return tituloA.localeCompare(tituloB);return parseFloat(t.querySelector(".precio").textContent.slice(1))-parseFloat(o.querySelector(".precio").textContent.slice(1))}),"descendente"===orden&&l.reverse();const n=document.querySelector(".productos");n.innerHTML="";let c=0;l.forEach((e,t)=>{r[c].appendChild(e),(t+1)%20==0&&c++}),r.forEach(e=>{n.appendChild(e)})}function filtrarResultados(){const e=document.querySelector(".filtros_herramienta-nombre p"),t=document.querySelector(".filtros_herramienta-precio p");e.addEventListener("click",()=>{const e=document.querySelectorAll(".filtros_herramienta-nombre i");ocultarFlechas(e),aplicarFiltro("titulo",e)}),t.addEventListener("click",()=>{const e=document.querySelectorAll(".filtros_herramienta-precio i");ocultarFlechas(e),aplicarFiltro("precio",e)})}function ocultarFlechas(e){const t=e[0],o=e[1];"none"==t.style.display?(t.style.display="inline",o.style.display="none"):(t.style.display="none",o.style.display="inline")}document.addEventListener("DOMContentLoaded",()=>{ocultarElementos(),filtrarResultados()});
//# sourceMappingURL=filtros.js.map
