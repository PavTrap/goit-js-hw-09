import Notiflix from 'notiflix';

//знайти елементи
const formElem = document.querySelector('.form');
const delayInputElem = document.querySelector('input[name="delay"]');
const stepInputElem = document.querySelector('input[name="step"]');
const amountInputElem = document.querySelector('input[name="amount"]');
const bntSubmitElem = document.querySelector('button[type="submit"]');




//функція для створення промісу зі значенням обєкту
function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
       const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay});
  } else {
    reject({position, delay});
  }
    }, delay)
  })
  return promise;
}

//слухаємо клік на кнопку
bntSubmitElem.addEventListener('click', (e) => {
  //щоб сторінка не перевантажувалась
  e.preventDefault();

  //записуємо значення введених даних
  const amount = amountInputElem.value;
  const step = stepInputElem.value;
  const delay = delayInputElem.value;

  if (amount >= 0 && step > 0 && delay > 0) {
     //проходимся по значенню кількості виклику промісу
  for (let i = 0; i < amount; i++){
    let delayStep = step * i;

    // викликаємо функцію створення промісу де передаємо дані - кількість разів виклику та крок затримки

    createPromise(i, delayStep)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });

    delayStep += step;

  }
  }

  //очищаємо форму після сабміту
  formElem.reset();
})