document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector('input[type="submit"]');i(e);let t=!1,n=!1;const d=document.getElementById("email"),o=document.getElementById("password");function i(e){e.disabled=!0,e.style.opacity="0.5",e.addEventListener("click",s)}function s(e){e.preventDefault()}function r(){var d;t&&n?((d=e).disabled=!1,d.style.opacity="1",d.removeEventListener("click",s)):i(e)}d.addEventListener("input",(function(e){const n=e.target.value;/^[a-zA-Z]{1,}@[a-zA-Z]{1,}\.com$/.test(n)?(d.style.border="2px solid green",t=!0):(d.style.border="2px solid red",t=!1),r()})),o.addEventListener("input",(function(e){const t=e.target.value;/^[a-zA-Z0-9]{4,}$/.test(t)?(o.style.border="2px solid green",n=!0):(o.style.border="2px solid red",n=!1),r()}))}));
//# sourceMappingURL=validacionLogin.js.map