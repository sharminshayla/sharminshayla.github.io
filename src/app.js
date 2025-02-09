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
  const navLinks = document.querySelector('.navbar-nav');
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

function activateMenuItem() {
  const view = document.querySelector('.view');
  const viewName = view.classList[1].replace('view-','');
  const activeMenuItem = document.querySelector(`.nav-item[data-view="${viewName}"]`);

  if (! activeMenuItem) { return; }

  activeMenuItem.classList.add('active');
}

document.addEventListener("DOMContentLoaded", (event) => {
  activateMenuItem();
  try { setupTheme(); } catch(e) {};
  addEmail(); 
});
