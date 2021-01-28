'use strict';
console.log('vamos');

const clueElement = document.querySelector('.js-clue');

function getRandomNumber(max) {
  clueElement.value = 'Pista: Escribe el número y dale a Prueba';
  return Math.ceil(Math.random() * max);
}
console.log(getRandomNumber(100));

window.addEventListener('load', getRandomNumber);
// cuando se recarga la página se genera un número aleatorio entre 1-100 y se muestra en consola.
// += se muestra en .js-clue Pista: Escribe un número y dale a Prueba
