function toggleEl(el, attr) {
    const isOpen = el.getAttribute(attr) === 'true';

    const val = isOpen ? false : true;
    el.setAttribute(attr, val);
}


const dropdownBtns = document.querySelectorAll('.dropdown-toggle');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        toggleEl(btn.parentElement, 'data-visible');
    })
})

const mobileBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navbar-collapse');

mobileBtn.addEventListener('click', () => {
    toggleEl(menu, 'data-visible');
    toggleEl(mobileBtn, 'aria-expanded');
})