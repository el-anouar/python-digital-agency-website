const root = document.documentElement;
let mode = localStorage.getItem('mode') || 'day';
const LDMode = document.querySelectorAll('.LDMode');
const navDeskTopDLMod = document.querySelector('.navDeskTopDLMod');
const navDeskTopDLModInner = document.querySelector('.navDeskTopDLModInner');
const navMobileDLMod = document.querySelector('.navMobileDLMod');
const navMobileDLModInner = document.querySelector('.navMobileDLModInner');
const desktopiInner = document.querySelector('.navDeskTopDLModInner .inner');
const desktopiOuter = document.querySelector('.navDeskTopDLModOuter .outer');
const mobileiInner = document.querySelector('.navMobileDLModInner .inner');
const mobileiOuter = document.querySelector('.navMobileDLModOuter .outer');

// Function to set the theme mode
function setThemeMode() {
  if (mode === 'night') {
    root.classList.remove('light-theme');
    root.classList.add('dark-theme');
    desktopiInner.classList.remove('fa-sun');
    desktopiInner.classList.add('fa-moon');
    desktopiOuter.classList.remove('fa-moon');
    desktopiOuter.classList.add('fa-sun');
    mobileiInner.classList.remove('fa-sun');
    mobileiInner.classList.add('fa-moon');
    mobileiOuter.classList.remove('fa-moon');
    mobileiOuter.classList.add('fa-sun');
  } else {
    root.classList.remove('dark-theme');
    root.classList.add('light-theme');
    desktopiInner.classList.remove('fa-moon');
    desktopiInner.classList.add('fa-sun');
    desktopiOuter.classList.remove('fa-sun');
    desktopiOuter.classList.add('fa-moon');
    mobileiInner.classList.remove('fa-moon');
    mobileiInner.classList.add('fa-sun');
    mobileiOuter.classList.remove('fa-sun');
    mobileiOuter.classList.add('fa-moon');
  }
}

// Set the initial theme mode on page load
setThemeMode();

LDMode.forEach((item) => {
  item.addEventListener('click', function () {
    if (mode === 'day') {
      navDeskTopDLModInner.classList.remove('navDeskTopDLModInnerAnimToDay');
      navDeskTopDLModInner.classList.add('navDeskTopDLModInnerAnimToNight');
      navMobileDLModInner.classList.remove('navDeskTopDLModInnerAnimToDay');
      navMobileDLModInner.classList.add('navDeskTopDLModInnerAnimToNight');

      const computedStyles = window.getComputedStyle(navDeskTopDLModInner);
      const animationDuration = computedStyles.animationDuration;
      navDeskTopDLModInner.addEventListener('animationstart', function (event) {
        if (event.animationName === 'navDeskTopDLModInnerAnimToNight') {
          setTimeout(() => {
            desktopiInner.classList.remove('fa-sun');
            desktopiInner.classList.add('fa-moon');
            desktopiOuter.classList.remove('fa-moon');
            desktopiOuter.classList.add('fa-sun');
          }, parseFloat(animationDuration.split('s')[0] * 1000) / 2);
        }
      });

      navMobileDLModInner.addEventListener('animationstart', function (event) {
        if (event.animationName === 'navDeskTopDLModInnerAnimToNight') {
          setTimeout(() => {
            mobileiInner.classList.remove('fa-sun');
            mobileiInner.classList.add('fa-moon');
            mobileiOuter.classList.remove('fa-moon');
            mobileiOuter.classList.add('fa-sun');
          }, parseFloat(animationDuration.split('s')[0] * 1000) / 2);
        }
      });

      root.classList.remove('light-theme');
      root.classList.add('dark-theme');
      mode = 'night';
      localStorage.setItem('mode', 'night');
    } else {
      navDeskTopDLModInner.classList.remove('navDeskTopDLModInnerAnimToNight');
      navDeskTopDLModInner.classList.add('navDeskTopDLModInnerAnimToDay');
      navMobileDLModInner.classList.remove('navDeskTopDLModInnerAnimToNight');
      navMobileDLModInner.classList.add('navDeskTopDLModInnerAnimToDay');

      const computedStyles = window.getComputedStyle(navDeskTopDLModInner);
      const animationDuration = computedStyles.animationDuration;
      navDeskTopDLModInner.addEventListener('animationstart', function (event) {
        if (event.animationName === 'navDeskTopDLModInnerAnimToDay') {
          setTimeout(() => {
            desktopiInner.classList.remove('fa-moon');
            desktopiInner.classList.add('fa-sun');
            desktopiOuter.classList.remove('fa-sun');
            desktopiOuter.classList.add('fa-moon');
          }, parseFloat(animationDuration.split('s')[0] * 1000) / 2);
        }
      });

      navMobileDLModInner.addEventListener('animationstart', function (event) {
        if (event.animationName === 'navDeskTopDLModInnerAnimToDay') {
          setTimeout(() => {
            mobileiInner.classList.remove('fa-moon');
            mobileiInner.classList.add('fa-sun');
            mobileiOuter.classList.remove('fa-sun');
            mobileiOuter.classList.add('fa-moon');
          }, parseFloat(animationDuration.split('s')[0] * 1000) / 2);
        }
      });

      root.classList.remove('dark-theme');
      root.classList.add('light-theme');
      mode = 'day';
      localStorage.setItem('mode', 'day');
    }
  });
});