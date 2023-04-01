"use strict"

// Asks for an username
let userName = prompt("What is your name?");


// First letter to uppercase
function upperFirstLetter (string) {
  let getFirstLetter = string.charAt(0);
  let sliceRemaining = string.slice(1);
  
  let capitalizedString = getFirstLetter.toUpperCase() + sliceRemaining.toLowerCase();

  return capitalizedString;
}

// Show the user's name
alert(`Hi ${upperFirstLetter(userName)}, be welcome!`);

// DUVIDAS

// Posso declarar as variáveis fora da função e depois atribuir o valor dentro delas?