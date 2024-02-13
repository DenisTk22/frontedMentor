// задание тем
const calcBodyEl = document.querySelector('.calc-body');

const calcThemesEl = document.querySelector('.calc__themes')

const themeClassicEl = document.querySelector('.theme-form_theme-classic');
const themeDarkEl = document.querySelector('.theme-form_theme-dark');
const themeLightEl = document.querySelector('.theme-form_theme-light');

calcThemesEl.addEventListener('change', e => {
    if (e.target.className === 'theme-form_theme-classic') {
        calcBodyEl.style.backgroundColor = 'gainsboro';
    } 
    if (e.target.className === 'theme-form_theme-dark') {
        calcBodyEl.style.backgroundColor = '#524545';
    
    }
    if (e.target.className === 'theme-form_theme-light') {
        calcBodyEl.style.backgroundColor = 'yellow';
    }
});