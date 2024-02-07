const calcButtonsEl = document.querySelector('.calc__buttons');
const calcScreenEl = document.querySelector('.calc__screen');

calcButtonsEl.addEventListener('click', e => {
    if (e.target.className === 'calc__buttons_digit') {
        let d1 = parseInt(e.target.textContent);
        calcScreenEl.textContent = d1;
        
    }
    // calcScreenEl.textContent = e.target.textContent;
})