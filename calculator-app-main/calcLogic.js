const calcButtonsEl = document.querySelector('.calc__buttons');
const calcScreenEl = document.querySelector('.calc__screen');

let d1 = '';
let d2 = '';
let temp = 0;
let result = 0;
let count = 0;
let signal = false; // операнд не нажат
let secondDigit = false; // не второе число
const operation = ['plus', 'minus', 'multiplay', 'div'];
let action = '';

calcButtonsEl.addEventListener('click', e => {
    // console.log(e.target.textContent);
// нажатие на кнопку с цифрой
    if (e.target.classList.contains(classDigit)) {
        if (signal === false) { // если операнд не нажат, то это первое число
        temp = e.target.textContent;
        d1 = d1 + temp;
        calcScreenEl.textContent = d1;
        } else { // если операнд нажат, то это второе число
            secondDigit = true;
            calcScreenEl.textContent = '';
            temp = e.target.textContent;
            d2 = d2 + temp;
            calcScreenEl.textContent = d2;
        }
    };
// нажатие на кнопку с точкой
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
    };
// нажатие на кнопку с RESET
    if (e.target.classList.contains(classReset)) {
        calcScreenEl.textContent = '';
        d1 = '';
        d2 = '';
        count = 0;
        signal = false;
        secondDigit = false;
    };
// нажатие на кнопку с DEL
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
// нажатие на кнопку с +
    if (e.target.classList.contains(classPluse)) {
        // console.log(d1);
        // console.log(d2);
        temp = 0;
        count = 0;
        signal = true;
        action = operation[0];
    };
// нажатие на кнопку с -
    if (e.target.classList.contains(classMinus)) {
        temp = '';
        count = 0;
        signal = true;
        action = operation[1];
    };
// нажатие на кнопку с *
    if (e.target.classList.contains(classMulty)) {
        temp = '';
        count = 0;
        signal = true;
        action = operation[2];
    };
//// нажатие на кнопку с /
    if (e.target.classList.contains(classDiv)) {
        temp = '';
        count = 0;
        signal = true;
        action = operation[3];
    };
// нажатие на кнопку с =
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


