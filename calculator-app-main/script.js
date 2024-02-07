const calcButtonsEl = document.querySelector('.calc__buttons');
const calcScreenEl = document.querySelector('.calc__screen');

let d1 = '';
let d2 = '';
let temp = '';
let result = 0;
calcButtonsEl.addEventListener('click', e => {
    if (e.target.classList.contains('calc__buttons_digit') || e.target.classList.contains('calc__buttons_dot')) {
        temp = e.target.textContent;
        d1 = d1 + temp;
        calcScreenEl.textContent = d1;
        // d1 = parseFloat(d1);
    } else if (e.target.classList.contains('calc__buttons_button-reset')) {
        calcScreenEl.textContent = '';
        d1 = '';
    // } else if (e.target.classList.contains('calc__buttons_plus')) {
    //     temp = '';
    //     if (e.target.classList.contains('calc__buttons_digit') || e.target.     classList.contains('calc__buttons_dot')) {
    //         temp = e.target.textContent;
    //         d2 = d2 + temp;
    //         calcScreenEl.textContent = d2;
           
    //     } 
        
    // }
});
