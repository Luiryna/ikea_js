
//day 1

const btmBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
const catalogList = document.querySelector('.catalog-list');
const subCatalog = document.querySelector('.subcatalog');
const btnReturn = document.querySelector('.btn-return');

const openMenu = () => {
    console.log('клик');
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () => {
    console.log('!клик');
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
};

const openSubMenu = event => {
   event.preventDefault();
   console.log('каталог клик');
   const itemList = event.target.closest('.catalog-list__item');
   if (itemList) {
        subCatalog.classList.add('subopen');
   }

};

const closeSubMenu = () => {
    console.log('!каталог клик');
    subCatalog.classList.remove('subopen');
};

btmBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalogList.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);