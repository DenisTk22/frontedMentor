
const yearEl = document.querySelector('.ageInfo__digit-years');
const monthEl = document.querySelector('.ageInfo__digit-months');
const dayEl = document.querySelector('.ageInfo__digit-days');

const yourDayEl = document.querySelector('.content__input-form_day');
const yourMonthEl = document.querySelector('.content__input-form_month');
const yourYearEl = document.querySelector('.content__input-form_year');

const errorDayEl = document.querySelector('.errorDay');
const errorMonthEl = document.querySelector('.errorMonth');
const errorYearEl = document.querySelector('.errorYear');

const dayTitleEl = document.querySelector('.content__input_title-day');
const monthTitleEl = document.querySelector('.content__input_title-month');
const yearTitleEl = document.querySelector('.content__input_title-year');

const buttonEl = document.querySelector('.content__arrow');

let currentDate = new Date();

const currentDay = currentDate.getDate(); // получение текущего числа месяца
const currentMonth = currentDate.getMonth() + 1; // получение номера текущего месяца, возвращает от 0 до 11, нужно + 1
const currentYear = currentDate.getFullYear(); // получение года

//в милисекундах

function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // console.log(date1);
    // console.log(date2);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2 - date1; // date2.getTime() - date1.getTime();

    if (diffInTime < 0) {
        errorDayEl.textContent = 'Must be a valid Day';
        errorDayEl.style.color = 'red';
        dayTitleEl.style.color = 'red';
        errorMonthEl.textContent = 'Must be a valid Month';
        errorMonthEl.style.color = 'red';
        monthTitleEl.style.color = 'red';
        errorYearEl.textContent = 'Must be a valid Year';
        errorYearEl.style.color = 'red';
        yearTitleEl.style.color = 'red';
        dayEl.textContent = '--';
        monthEl.textContent = '--';
        yearEl.textContent = '--';
        // e.preventDefault();
        return;
    } 
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
     
    };
    // Calculating the no. of days between two dates
    


buttonEl.addEventListener('click', (e) => {

    // console.log(yourDayEl.value);

    if (yourDayEl.value < 1 || yourDayEl.value > 31) {
        errorDayEl.textContent = 'Must be a valid Day';
        errorDayEl.style.color = 'red';
        dayTitleEl.style.color = 'red';
        dayEl.textContent = '--';
        monthEl.textContent = '--';
        yearEl.textContent = '--';
        return;
        // e.preventDefault();
    }

    if (yourMonthEl.value < 1 || yourMonthEl.value > 12) {
        errorMonthEl.textContent = 'Must be a valid Month';
        errorMonthEl.style.color = 'red';
        monthTitleEl.style.color = 'red';
        dayEl.textContent = '--';
        monthEl.textContent = '--';
        yearEl.textContent = '--';
        return;
        // e.preventDefault();
    }

    if (yourYearEl.value < 1900 || yourYearEl.value > currentYear) {
        errorYearEl.textContent = 'Must be a valid Year';
        errorYearEl.style.color = 'red';
        yearTitleEl.style.color = 'red';
        dayEl.textContent = '--';
        monthEl.textContent = '--';
        yearEl.textContent = '--';
        return;
        // e.preventDefault();
    }


    const yourDateInString = String(String(yourMonthEl.value) + '/' + String(yourDayEl.value) + '/' + String(yourYearEl.value));

    console.log(yourDateInString); 

    const NumberOfDays = getNumberOfDays(yourDateInString, currentDate);
    let countYear = parseInt(NumberOfDays / 365);
    
    let vesokosniyDays =  parseInt(countYear / 4);
    let daysOver = (NumberOfDays - (countYear * 365)) - vesokosniyDays;  

    // console.log(`Всего дней ${NumberOfDays}`);
    // console.log(`Целых лет ${countYear}`)
    // console.log(`Сверх Дней ${daysOver}`);

    let monthsOver = 0;
    let fanalyDaysOver = daysOver;
    
    if (daysOver >= 30) {
        monthsOver = parseInt(daysOver / 30.417);
        fanalyDaysOver = daysOver - (monthsOver * 30.417);
    }

    console.log(`Месяцев ${monthsOver}`);
    console.log(`Дней ${fanalyDaysOver}`);


    yearEl.textContent = countYear;
    monthEl.textContent = monthsOver;
    dayEl.textContent = fanalyDaysOver;
});

// buttonEl.addEventListener('click', buttonClick);