const mmenu = document.querySelector('.mbl-menu');
const hamb = document.querySelector('.hamimg');
const imgclose = document.querySelector('.img-close');
const homeb = document.querySelector('.m-menu-tag1');
const aboutm = document.querySelector('.m-menu-tag2');
const sponsorb = document.querySelector('.m-menu-tag3');
const Sbutton = document.createElement('button');
const Sbutton2 = document.createElement('button');

function menubuttonc() {
  mmenu.classList.toggle('mbl-menu_visible');
  Sbutton.classList.toggle('HideB');
  Sbutton2.classList.toggle('HideB');
}
function menubutton() {
  mmenu.classList.toggle('mbl-menu_visible');
  Sbutton.classList.toggle('HideB');
  Sbutton2.classList.toggle('HideB');
}

hamb.addEventListener('click', () => {
  mmenu.classList.toggle('mbl-menu_visible');
});
imgclose.addEventListener('click', () => {
  mmenu.classList.toggle('mbl-menu_visible');
});

homeb.addEventListener('click', menubuttonc);
sponsorb.addEventListener('click', menubutton);
aboutm.addEventListener('click', menubutton);