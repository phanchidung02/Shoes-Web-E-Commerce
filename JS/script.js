const navLinks = document.querySelector('.nav-links');
const wishLists = document.querySelector('.wish-list');
const cart = document.querySelector('.cart');
const search = document.getElementById('search');
const topHeader = document.querySelector('.top-header');
const btnCancel = document.querySelector('.btn-cancel');
const mediaQuery = window.matchMedia('(max-width: 768px)'); //!  Độ phân giải reponsive <= 768px
const btnSearch = document.querySelector('.btn-search');
const btnMenu = document.querySelector('.btn-menu');
const btnClose = document.querySelector('.btn-close');
const body = document.querySelector('body');
const overlay = document.querySelector('#overlay');

const overClick = () => {
    topHeader.classList.remove('hidden');
    cart.classList.remove('hidden');
    wishLists.classList.remove('hidden');
    navLinks.classList.remove('hidden');
    search.style.width = '200px';
    btnCancel.classList.add('hidden');
    document.querySelector('.trend').classList.add('hidden');
    document.querySelector('.logo').classList.remove('hidden');
};

const onClick = () => {
    topHeader.classList.add('hidden');
    cart.classList.add('hidden');
    wishLists.classList.add('hidden');
    navLinks.classList.add('hidden');
    search.style.width = '800px';
    btnCancel.classList.remove('hidden');
    document.querySelector('.trend').classList.remove('hidden');
    document.querySelector('.logo').classList.add('hidden');
};

search.addEventListener('click', onClick);

btnCancel.addEventListener('click', overClick);

btnSearch.addEventListener('click', onClick);

//! Reponsive By JS
const respond = (e) => {
    //! Check xem có đúng độ phân giải ko ?
    if (e.matches) {
        search.classList.add('visual'); //? Search Bar
        //? Button Search
        btnSearch.addEventListener('click', () => {
            search.classList.remove('visual');
            search.classList.add('open');
            body.classList.add('overflow');
        });

        //? Button Cancel
        btnCancel.addEventListener('click', () => {
            search.classList.add('visual');
            body.classList.remove('overflow');
            overlay.classList.add('hidden');
        });

        //? Button Menu
        btnMenu.addEventListener('click', () => {
            navLinks.classList.add('nav-menu-transform');
            btnClose.classList.remove('hidden');
            overlay.classList.remove('hidden');
            body.classList.add('overflow');
        });

        //? Button X
        btnClose.addEventListener('click', () => {
            navLinks.classList.remove('nav-menu-transform');
            btnClose.classList.add('hidden');
            body.classList.remove('overflow');
            overlay.classList.add('hidden');
        });

        //? Search Bar
        search.addEventListener('click', () => {
            search.classList.remove('visual');
            search.classList.add('open');
        });

        //? Root
        overlay.addEventListener('click', () => {
            navLinks.classList.remove('nav-menu-transform');
            overlay.classList.add('hidden');
            body.classList.remove('overflow');
        });
    }
};

respond(mediaQuery);
mediaQuery.addEventListener('click', respond);
