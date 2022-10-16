const navLinks = document.querySelector('.nav-links');
const wishLists = document.querySelector('.wish-list');
const cart = document.querySelector('.cart');
const search = document.getElementById('search');
const topHeader = document.querySelector('.top-header');
const btnExit = document.querySelector('.btn-cancel');
const mediaQuery = window.matchMedia('(max-width: 768px)');
const btnSearch = document.querySelector('.btn-search');
const btnMenu = document.querySelector('.btn-menu');
const btnClose = document.querySelector('.btn-close');
const menuList = document.querySelector('#title-list');
const btnList = document.querySelector('#btn-list');
const body = document.querySelector('body');

const overClick = () => {
  topHeader.classList.remove('hidden');
  cart.classList.remove('hidden');
  wishLists.classList.remove('hidden');
  navLinks.classList.remove('hidden');
  search.style.width = '200px';
  btnExit.classList.add('hidden');
  document.querySelector('.trend').classList.add('hidden');
  document.querySelector('.logo').classList.remove('hidden');
};

const onClick = () => {
  topHeader.classList.add('hidden');
  cart.classList.add('hidden');
  wishLists.classList.add('hidden');
  navLinks.classList.add('hidden');
  search.style.width = '800px';
  btnExit.classList.remove('hidden');
  document.querySelector('.trend').classList.remove('hidden');
  document.querySelector('.logo').classList.add('hidden');
};

search.addEventListener('click', onClick);

btnExit.addEventListener('click', overClick);

btnSearch.addEventListener('click', onClick);

const respond = (e) => {
  if (e.matches) {
    search.classList.add('visual');
    btnSearch.addEventListener('click', () => {
      search.classList.remove('visual');
      search.classList.add('open');
      body.classList.add('overflow');
    });
    btnExit.addEventListener('click', () => {
      search.classList.add('visual');
      body.classList.remove('overflow');
    });
    btnMenu.addEventListener('click', () => {
      navLinks.classList.add('nav-menu-transform');
      btnClose.classList.remove('hidden');
      body.classList.add('overflow');
    });

    btnClose.addEventListener('click', () => {
      navLinks.classList.remove('nav-menu-transform');
      btnClose.classList.add('hidden');
      body.classList.remove('overflow');
    });
    search.addEventListener('click', () => {
      search.classList.remove('visual');
      search.classList.add('open');
    });
  }
};

respond(mediaQuery);
mediaQuery.addEventListener('click', respond);
