
const yearEl = document.querySelector('.ageInfo__digit-years');
const monthEl = document.querySelector('.ageInfo__digit-months');
const dayEl = document.querySelector('.ageInfo__digit-days');

const yourDayEl = document.querySelector('.content__input-form_day');
const yourMonthEl = document.querySelector('.content__input-form_month');
const yourYearEl = document.querySelector('.content__input-form_year');

console.log(typeof(yourDayEl));

const buttonEl = document.querySelector('.content__arrow');

let currentDate = new Date();

const currentDay = currentDate.getDate(); // получение текущего числа месяца
const currentMonth = currentDate.getMonth() + 1; // получение номера текущего месяца, возвращает от 0 до 11, нужно + 1
const currentYear = currentDate.getFullYear(); // получение года

console.log(currentDate);
console.log(currentDay);
console.log(currentMonth);
console.log(currentYear);
console.log(yourDayEl.textContent);

const yourDateInString = String(String(yourMonthEl.value) + '/' + String(yourDayEl.value) + '/' + String(yourYearEl.value));

console.log(yourDateInString);

//в милисекундах

function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}


const buttonClick = () => {
    const yourDateInString = String(String(yourMonthEl.value) + '/' + String(yourDayEl.value) + '/' + String(yourYearEl.value));

    console.log(yourDateInString); 

    const NumberOfDays = getNumberOfDays(yourDateInString, currentDate);
    let countYear = parseInt(NumberOfDays / 365);
    
    let vesokosniyDays =  parseInt(countYear / 4);
    let daysOver = (NumberOfDays - (countYear * 365)) - vesokosniyDays;  

    console.log(`Всего дней ${NumberOfDays}`);
    console.log(`Целых лет ${countYear}`)
    console.log(`Сверх Дней ${daysOver}`);

    let monthsOver = 0;
    let fanalyDaysOver = daysOver;
    
    if (daysOver >= 30) {
        monthsOver = parseInt(daysOver / 30);
        fanalyDaysOver = daysOver - (monthsOver * 30);
    }

    console.log(`Месяцев ${monthsOver}`);
    console.log(`Дней ${fanalyDaysOver}`);


    yearEl.textContent = countYear;
    monthEl.textContent = monthsOver;
    dayEl.textContent = fanalyDaysOver;
};

buttonEl.addEventListener('click', buttonClick);