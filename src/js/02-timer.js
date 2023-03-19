// Описаний в документації
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


//знайти елементи
const inputRef = document.querySelector('#datetime-picker');
const btnRef = document.querySelector('button[data-start]');
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');

btnRef.disabled = true;

//параметри бібліотеки flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      btnRef.disabled = false;
    }
  },

};

//запуск flatpickr - у інпут додає параметри бібліотеки
flatpickr(inputRef, options);







//функція, що відраховує зворотній зв'язок
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//функція, що додає нуль напочатку
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}








//функціонал при натисканні на кнопку
btnRef.addEventListener('click', () => {
	
  // встановити інтервал
  let timerId = setInterval(() => {

  // встановити поточну дату та взяти дату вибрану користувачем і визначити дельта дату
    let deltaTime = new Date(inputRef.value) - new Date();

	// зробити неактивною кнопку при натисканні
    btnRef.disabled = true;

    if (deltaTime >= 0) {

	// закинути дані у функцію convertMs
      let timerFunction = convertMs(deltaTime);

	// дані вивести у поля спан і додати нуль на початку
      daysRef.textContent = addLeadingZero(timerFunction.days);
      hoursRef.textContent = addLeadingZero(timerFunction.hours);
      minutesRef.textContent = addLeadingZero(timerFunction.minutes);
      secondsRef.textContent = addLeadingZero(timerFunction.seconds);

    } else {
      Notiflix.Notify.success('Count has finished');
      clearInterval(timerId);
    }

  }, 1000);
})