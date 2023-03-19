//рандомна фукнція підбору кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//знайти елементи
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;
const body = document.body;

//слухач при натисканні кнопки старт - встановлює інтервал, змінює колір відповідно до рандомної функції
btnStart.addEventListener("click", () => {
  timerId = setInterval(() => {
   body.style.backgroundColor = getRandomHexColor();
	body.style.height = "100vw";
  }, 1000);
  //робить кнопку старт не активною
  btnStart.disabled = true;
});

//слухач при натисканні кнопки стоп - очищує інтервал
btnStop.addEventListener("click", () => {
	clearInterval(timerId);
	//робить старт активною
	btnStart.disabled = false;
});










