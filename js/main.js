'use strict';

const numberInput = document.querySelector('.js-number');
const testButton = document.querySelector('.js-button');
const tipElement = document.querySelector('.js-clue');
const counterElement = document.querySelector('.js-tries');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function renderTip(message) {
  tipElement.innerHTML = 'Pista: ' + message;
}

function checkNumber() {
  const userNumberValue = numberInput.value;
  const numberValue = parseInt(userNumberValue);

  if (numberValue === '') {
    renderTip('El número debe estar entre 1 y 100');
  } else if (numberValue < 1 || numberValue > 100) {
    renderTip('El número debe estar entre 1 y 100');
  } else if (numberValue > randomNumber) {
    renderTip('Demasiado alto');
  } else if (numberValue < randomNumber) {
    renderTip('Demasiado bajo');
  } else {
    renderTip('¡Has ganado, campeona!');
  }
}
let triesCounter = 0;
function increaseCounter() {
  triesCounter = triesCounter + 1;
  counterElement.value = `Numero de intentos: ${triesCounter}`;
}

function handleClickTestButton() {
  checkNumber();
  increaseCounter();
}

const randomNumber = getRandomNumber(100);

testButton.addEventListener('click', handleClickTestButton);
