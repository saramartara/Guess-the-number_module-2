'use strict';

//Data:
// número usuaria
// número aleatorio
//si recojo el value del input al cargar la página, estará vacío
// tengo que recogerlo cuando la usuaria haga click

const numberInput = document.querySelector('.js-number');
const testButton = document.querySelector('.js-button');
const tipElement = document.querySelector('.js-clue');
console.log(tipElement);
// const userNumberValue = numberInput.value;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function renderTip(message) {
  tipElement.innerHTML = message;
}

function handleClickTestButton(event) {
  //steps:
  //1. take user number
  //2. check if it is higher
  //3. check if it is lower
  //4. check if it is equal
  //5.check number is in range
  //6. Render message

  const userNumberValue = numberInput.value;
  const numberValue = parseInt(userNumberValue); // ojo! parseInt para que pueda comparar número con número

  if (userNumberValue === '') {
    renderTip('El número debe estar entre 1 y 100');
  } else if (userNumberValue < 1 || userNumberValue > 100) {
    renderTip('El número debe estar entre 1 y 100');
  } else if (userNumberValue > randomNumber) {
    renderTip('Demasiado alto');
  } else if (userNumberValue < randomNumber) {
    renderTip('Demasiado bajo');
  } else if (userNumberValue === randomNumber) {
    renderTip('¡Has ganado, campeona!');
  }
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

testButton.addEventListener('click', handleClickTestButton);
