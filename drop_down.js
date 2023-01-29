const navMenu = document.querySelector('#nav-menu');
const xButton = document.querySelector('.r-side');
const links = document.querySelectorAll('.nav-menu > li');
const bd = document.querySelector('.background-blur');
const openButton = document.querySelector('.menu-toggle');
const xClose = () => {
  navMenu.style.display = 'none';
  bd.classList.remove('blur');
  openButton.style.display = 'block';
};
const openMenu = () => {
  navMenu.style.display = 'block';
  openButton.style.display = 'none';
  bd.classList.add('blur');
};

openButton.addEventListener('click', openMenu);
xButton.addEventListener('click', xClose);
links.forEach((link) => {
  link.addEventListener('click', xClose);
});