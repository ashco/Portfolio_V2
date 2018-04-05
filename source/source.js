const sectionWelcome = document.querySelector('#welcome');
const sectionProjects = document.querySelector('#projects');
const sectionAbout = document.querySelector('#about');

const titleName = document.querySelector('.welcome__title');
const navName = document.querySelector('li.nav__menu-item--name');

function scrollPage(section) {
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function toggleNavName() {
  const windowInfo = window.scrollY;
  const titleOffsetBottom = titleName.offsetTop + titleName.clientHeight;
  if (windowInfo > titleOffsetBottom) {
    navName.classList.remove('hidden');
  } 
  else {
    navName.classList.add('hidden');
  }
}

window.addEventListener('scroll', toggleNavName);