import dayjs from 'dayjs';

import "./style.css";

function addTenures() {
  document.querySelectorAll('.tenure').forEach(function (el) {
    const work = {
      startDate: el.dataset.start,
      endDate: el.dataset.end,
    }

    const startDate = dayjs(work.startDate, 'YYYY-MM-DD');
    const endDate = work.endDate ? dayjs(work.endDate, 'YYYY-MM-DD') : dayjs();
    const formattedStartDate = startDate.format('MMM YYYY');
    const formattedEndDate = endDate.format('MMM YYYY');
    const tenureStr = work.endDate ? `${formattedStartDate} to ${formattedEndDate}` : `Since ${formattedStartDate}`;

    const diffInMonths = Math.ceil(endDate.diff(startDate, 'month', true));
    const diffInYears = Math.floor(endDate.diff(startDate, 'year', true));
    const durationStr = diffInYears > 0 ? `${diffInYears} year${diffInYears === 1 ? '' : 's'}, ${(diffInMonths % 12)} month${diffInMonths % 12 === 1 ? '' : 's'}` : `${diffInMonths} month${diffInMonths === 1 ? '' : 's'}`

    el.innerHTML = `${tenureStr} (${durationStr})`;
  });
}

function addEaseAnimation() {
  const timeline = [];
  const duration = 500;
  timeline.forEach((selector, index) => {
    const element = document.querySelector(selector);
    element.style.opacity = 0;
    window.setTimeout(() => {
      element.animate([
        { transform: "translateY(24px)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 },
      ], {
        duration,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)"
      });
      element.style.opacity = 1;
    }, duration * index)
  });

  const element = document.querySelector('.hero-img');
  element.animate([
    { transform: "scale(1.1)", opacity: 0 },
    { transform: "scale(1)", opacity: 1 },
    { transform: "scale(1.01)", opacity: 1 },
    { transform: "scale(1)", opacity: 1 }
  ], {
    duration: duration * 3,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  });
  element.style.opacity = 1;
}

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
  try { addEaseAnimation(); } catch(e) {};
  addEmail(); 
  addTenures();
};
