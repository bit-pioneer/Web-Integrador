function eventListeners(){crearSliderCarrusel()}function crearSliderCarrusel(){const e=document.querySelectorAll(".carrusel-flecha-izquierda"),t=document.querySelectorAll(".carrusel-flecha-derecha");e.forEach(e=>{e.addEventListener("click",e=>{const t=e.target.parentNode.nextElementSibling;t.scrollLeft=t.scrollLeft-t.offsetWidth})}),t.forEach(e=>{e.addEventListener("click",e=>{const t=e.target.parentNode.previousElementSibling;t.scrollLeft=t.scrollLeft+t.offsetWidth})})}document.addEventListener("DOMContentLoaded",(function(){eventListeners()}));
//# sourceMappingURL=slider.js.map