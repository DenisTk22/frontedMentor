// задание тем
const calcBodyEl = document.querySelector('.calc-body');

const calcThemesEl = document.querySelector('.calc__themes')

const themeClassicEl = document.querySelector('.theme-form_theme-classic');
const themeDarkEl = document.querySelector('.theme-form_theme-dark');
const themeLightEl = document.querySelector('.theme-form_theme-light');

// if (themeClassicEl.hasAttribute('checked')) {
//     calcBodyEl.style.backgroundColor = 'green';
// }

// if (themeDarkEl.checked) {
//     calcBodyEl.style.backgroundColor = 'darkblue';
// }

calcThemesEl.addEventListener('change', e => {
    if (e.target.className === 'theme-form_theme-classic') {
        console.log('green');
        calcBodyEl.style.backgroundColor = 'purple';
    } 
    if (e.target.className === 'theme-form_theme-dark') {
        console.log('grdarkblue');
        calcBodyEl.style.backgroundColor = 'darkblue';
    }
    if (e.target.className === 'theme-form_theme-light') {
        console.log('yellow');
        calcBodyEl.style.backgroundColor = 'yellow';
    }
})