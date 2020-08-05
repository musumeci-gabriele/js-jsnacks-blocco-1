// INSERISCI UN NUMERO
var numOne = prompt("Inserisci un numero :");
console.log(numOne);

// INSERISCI IL SECONDO NUMERO
var numTwo = prompt("Inserisci il secondo numero :");
console.log(numTwo);

// STAMPA IL NUMERO MAGGIORE
if (numOne > numTwo){
  document.getElementById('numero').innerHTML = (numOne);
  console.log(numOne);
}

// ALTRIMENTI STAMPA IL NUMERO DUE
else if (numOne < numTwo){
  console.log(numTwo);
  document.getElementById('numero').innerHTML = (numTwo);
}

// SE SONO UGUALI
else (numOne == numTwo){
  console.log("I numeri inseriti sono uguali.");
  document.getElementById('numero').innerHTML = (" I numeri inseriti sono uguali.");
}
