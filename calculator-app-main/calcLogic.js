const calcButtonsEl = document.querySelector('.calc__buttons');
const calcScreenEl = document.querySelector('.calc__screen');

let d1 = '';
let d2 = '';
let temp = '';
let result = 0;
let count = 0;
let signal = false;
let secondDigit = false;
const operation = ['plus', 'minus', 'multiplay', 'div'];
let action = '';

calcButtonsEl.addEventListener('click', e => {

    if (e.target.classList.contains(classDigit)) {
        if (signal === false) { 
        temp = e.target.textContent;
        d1 = d1 + temp;
        calcScreenEl.textContent = d1;
        } else {
            secondDigit = true;
            calcScreenEl.textContent = '';
            temp = e.target.textContent;
            d2 = d2 + temp;
            calcScreenEl.textContent = d2;
        }
    };
    if (e.target.classList.contains(classDot)) {
        count++;
        if (count === 1 && secondDigit === false) {
            temp = e.target.textContent;
            d1 = d1 + temp;
            calcScreenEl.textContent = d1;
        } 
        if (count === 1 && secondDigit === true) {
            temp = e.target.textContent;
            d2 = d2 + temp;
            calcScreenEl.textContent = d2;
        } else return;
    }
    if (e.target.classList.contains(classReset)) {
        calcScreenEl.textContent = '';
        d1 = '';
        d2 = '';
        count = 0;
        signal = false;
        secondDigit = false;
    };
    if (e.target.classList.contains(classDelete)) {
        let del = calcScreenEl.textContent;
        del = del.substring(0, del.length - 1);
        if (signal === false) {
            calcScreenEl.textContent = del;
            d1 = del;
        } else {
            calcScreenEl.textContent = del;
            d2 = del;
        }
        
    };
    if (e.target.classList.contains(classPluse)) {
        temp = '';
        count = 0;
        signal = true;
        action = operation[0];
    };
    if (e.target.classList.contains(classMinus)) {
        temp = '';
        count = 0;
        signal = true;
        action = operation[1];
    };
    if (e.target.classList.contains(classMulty)) {
        temp = '';
        count = 0;
        signal = true;
        action = operation[2];
    };
    if (e.target.classList.contains(classDiv)) {
        temp = '';
        count = 0;
        signal = true;
        action = operation[3];
    };
    if (e.target.classList.contains(classEqually)) {
        d1 = parseFloat(d1);
        d2 = parseFloat(d2);
        if (action === operation[0]) { // сумма
            result = d1 + d2;
        };
        if (action === operation[1]) { // разность
            result = d1 - d2;
        };
        if (action === operation[2]) { //умножение
            result = d1 * d2;
        };
        if (action === operation[3]) { //деление
            result = d1 / d2;
        };
        
        calcScreenEl.textContent = result;
        d1 = '';
        d2 = '';
        count = 0;
        signal = false;
        secondDigit = false;
    }
});

