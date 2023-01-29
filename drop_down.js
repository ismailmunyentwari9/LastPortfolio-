//* ****Dro down codes ***************
const menuContainer = document.querySelector('.menu');
const closeUp = document.querySelector('.right');
const menus = document.querySelectorAll('.menu > li');
const body = document.querySelector('.blurx');
const open = document.querySelector('.bar-button');
const closeMenu = () => {
  menuContainer.style.display = 'none';
  body.classList.remove('blur');
  open.style.display = 'block';
};
const openMenu = () => {
  menuContainer.style.display = 'block';
  open.style.display = 'none';
  body.classList.add('blur');
};

open.addEventListener('click', openMenu);
closeUp.addEventListener('click', closeMenu);
menus.forEach((link) => {
  link.addEventListener('click', closeMenu);
});