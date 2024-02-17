
const burgerEl = document.querySelector('.content__navigation_burger');
const burgerMenuEl = burgerEl.querySelector('.content__navigation_burger_menu');

let count = 0;

burgerEl.addEventListener('click', e => {
    if (e.target.classList.contains('your-click')) {
        count++;
        if (count % 2 !== 0) {
            burgerMenuEl.style.display = 'flex';
        } else burgerMenuEl.style.display = 'none';
    }
});