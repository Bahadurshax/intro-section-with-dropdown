function toggleEl(el) {
    const isOpen = el.getAttribute('aria-expanded') === 'true';

    const attr = isOpen ? false : true;
    el.setAttribute('aria-expanded', attr);
}


const dropdownBtns = document.querySelectorAll('.dropdown-toggle');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        toggleEl(btn.parentElement);
    })
})

const mobileBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navbar-collapse');

mobileBtn.addEventListener('click', () => {
    toggleEl(menu);
})