function eventListeners(){bannerCambiante(),crearSliderCarrusel()}function bannerCambiante(){const e=window.innerWidth;cambiarFondo(),e>768&&setInterval(cambiarFondo,5e3)}function cambiarFondo(){let e=document.querySelector(".barra-busqueda");let n="/build/img/banner"+(Math.floor(7*Math.random())+1)+".jpg";e.style.background='url("'+n+'")'}function crearSliderCarrusel(){const e=document.querySelectorAll(".carrusel-flecha-izquierda"),n=document.querySelectorAll(".carrusel-flecha-derecha");e.forEach(e=>{e.addEventListener("click",e=>{const n=e.target.parentNode.nextElementSibling;n.scrollLeft=n.scrollLeft-n.offsetWidth})}),n.forEach(e=>{e.addEventListener("click",e=>{const n=e.target.parentNode.previousElementSibling;n.scrollLeft=n.scrollLeft+n.offsetWidth})})}document.addEventListener("DOMContentLoaded",(function(){eventListeners()}));var contenedor=document.querySelector(".barra-busqueda"),anchoContenedor=contenedor.offsetWidth,alturaContenedor=contenedor.offsetHeight,relacionAspecto=anchoContenedor/alturaContenedor;console.log("Relación de aspecto del contenedor: "+relacionAspecto);
//# sourceMappingURL=app.js.map
