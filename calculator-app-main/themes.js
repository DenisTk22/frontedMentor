// задание тем
const calcBodyEl = document.querySelector('.calc-body');

const themeClassicEl = document.querySelector('.theme-form_theme-classic');
const themeDarkEl = document.querySelector('.theme-form_theme-dark');
const themeLightEl = document.querySelector('.theme-form_theme-light');

if (themeClassicEl.hasAttribute('checked')) {
    calcBodyEl.style.backgroundColor = 'green';
}

if (themeDarkEl.checked) {
    calcBodyEl.style.backgroundColor = 'darkblue';
}