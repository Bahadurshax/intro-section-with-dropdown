// main nav dropdown menu toggle btn
const dropdownBtns = document.querySelectorAll('.dropdown-toggle');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        event.preventDefault();
        event.currentTarget.parentElement.classList.toggle('open');
    })
})

// mobile burger btn
const mobileBtn = document.querySelector('.mobile-btn');
const mobileBtnImg = document.querySelector('.mobile-btn img');
const mobileMenu = document.querySelector('.navbar-collapse');

mobileBtn.addEventListener('click', event => {
    mobileMenu.classList.toggle('show');

    if (mobileMenu.classList.contains('show')) {
        mobileBtnImg.src = 'images/icon-close-menu.svg';
    } else {
        mobileBtnImg.src = 'images/icon-menu.svg';
    }
})