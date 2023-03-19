//Функция рандомного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//Поиск элементов
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;
const body = document.body;

//слушатель при нажатии на старт создает интервал, и присваивает значение функции с рандомным цветом
btnStart.addEventListener("click", () => {
  timerId = setInterval(() => {
   body.style.backgroundColor = getRandomHexColor();
	body.style.height = "100vw";
  }, 1000);
  //кномка старт не активная
  btnStart.disabled = true;
  btnStop.disabled = false;
});

//слушатель при нажатии на стоп очищает интервал
btnStop.addEventListener("click", () => {
	clearInterval(timerId);
	//делает кнопку старт активной
	btnStart.disabled = false;
	btnStop.disabled = true;
});










