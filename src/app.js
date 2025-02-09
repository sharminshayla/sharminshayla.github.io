import "./app.css";

function saveThemePreference() {
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function setupTheme() {
  saveThemePreference();
  const navLinks = document.querySelector('nav > div');
  const defaultDark = document.documentElement.classList.contains("dark");
  

  const makeButton=  () => `<button class="nav-link btn btn-link mode-switch" title="Switch Theme"><i class="mode-switch-icon fa-lg fas fa-${defaultDark ? 'moon': 'sun'}"></i></button>`;
  navLinks.innerHTML = makeButton() + navLinks.innerHTML;
  const icon = document.querySelector('.mode-switch-icon');
  
  const toggle = function () {
    document.documentElement.classList.toggle('dark');
    icon.classList.toggle(`fa-moon`);
    icon.classList.toggle(`fa-sun`);
    saveThemePreference();
  };

  document.querySelector('.mode-switch').addEventListener("click", toggle);
}

function addEmail() {
  const emailEls = document.getElementsByClassName('cryptedmail');
  if (emailEls.length === 0) { return; }
  emailEls[0].outerHTML = '<a href="mailto:example@gmail.com" title="Send Email">example@gmail.com</a>';
}

window.onload = function () {
  try { setupTheme(); } catch(e) {};
  addEmail(); 
};
