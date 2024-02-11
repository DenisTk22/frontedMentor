
const classDigit = 'calc__buttons_digit';
const classDelete = 'calc__buttons_delete';
const classPluse = 'calc__buttons_plus';
const classMinus = 'calc__buttons_minus';
const classDot = 'calc__buttons_dot';
const classDiv = 'calc__buttons_divide';
const classMulty = 'calc__buttons_multiplay';
const classReset = 'calc__buttons_button-reset';
const classEqually = 'calc__buttons_button-equally';
const classButton = 'calc__buttons_button';

const buttonsData = [
    {
        name: '7',
        className: classDigit,
    },
    {
        name: '8',
        className: classDigit,
    },
    {
        name: '9',
        className: classDigit,
    },
    {
        name: 'DEL',
        className: classDelete,
    },
    {
        name: '4',
        className: classDigit,
    },
    {
        name: '5',
        className: classDigit,
    },
    {
        name: '6',
        className: classDigit,
    },
    {
        name: '+',
        className: classPluse,
    },
    {
        name: '1',
        className: classDigit,
    },
    {
        name: '2',
        className: classDigit,
    },
    {
        name: '3',
        className: classDigit,
    },
    {
        name: '-',
        className: classMinus,
    },
    {
        name: '.',
        className: classDot,
    },
    {
        name: '0',
        className: classDigit,
    },
    {
        name: '/',
        className: classDiv,
    },
    {
        name: '*',
        className: classMulty,
    },
    {
        name: 'RESET',
        className: classReset,
    },
    {
        name: '=',
        className: classEqually,
    },
]

const buttonsCalcEl = document.querySelector('.calc__buttons');

buttonsData.forEach(buttonData => {

    const buttonEl = document.createElement('button'); // создание элемента button
    buttonEl.classList.add(buttonData.className);
    buttonEl.classList.add(classButton);
    buttonEl.textContent = buttonData.name;

    buttonsCalcEl.appendChild(buttonEl);
});