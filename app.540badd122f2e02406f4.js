(()=>{"use strict";function e(){document.documentElement.classList.contains("dark")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")}document.addEventListener("DOMContentLoaded",(function(t){var n,c,a;n=document.querySelector(".view").classList[1].replace("view-",""),(c=document.querySelector('.nav-item[data-view="'.concat(n,'"]')))&&c.classList.add("active");try{!function(){e();var t=document.querySelector(".navbar-nav"),n=document.documentElement.classList.contains("dark");t.innerHTML='<button class="nav-link btn btn-link mode-switch" title="Switch Theme"><i class="mode-switch-icon fa-lg fas fa-'.concat(n?"moon":"sun",'"></i></button>')+t.innerHTML;var c=document.querySelector(".mode-switch-icon");document.querySelector(".mode-switch").addEventListener("click",(function(){document.documentElement.classList.toggle("dark"),c.classList.toggle("fa-moon"),c.classList.toggle("fa-sun"),e()}))}()}catch(e){}0!==(a=document.getElementsByClassName("cryptedmail")).length&&(a[0].outerHTML='<a href="mailto:example@gmail.com" title="Send Email">example@gmail.com</a>')}))})();