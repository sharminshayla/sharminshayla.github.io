import "./home.css";

import dayjs from 'dayjs';

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

window.onload = function () {
  try { addEaseAnimation(); } catch(e) {};
  addTenures();
};
