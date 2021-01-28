'use strict';

// cuando se recarga la página se genera un número aleatorio entre 1-100 y se muestra en consola.
// += se muestra en .js-clue Pista: Escribe un número y dale a Prueba
const clueElement = document.querySelector('.js-clue');

function getRandomNumber(max) {
  clueElement.value = 'Pista: Escribe el número y dale a Prueba';
  return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);
console.log(randomElement);

// let randomNumber = getRandomNumber(100);
// console.log(randomNumber);

window.addEventListener('load', getRandomNumber);

// CUANDO la usuaria clika el botón de prueba, recoger el número escrito en '.js-inputNumber', regogerlo y compararlo con RandomNumber.

const buttonElement = document.querySelector('.js-bnt')
const NumberElement = document.querySelector('.js-inputNumber');

function handleComparation{
    let NumberValue = NumberElement.value;
    if (NumberValue === randomNumber) {

    }
    
}

buttonElement.addEventListener('click', handleComparation);
