// INSERISCI UN NUMERO
var numOne = parseInt(prompt("Inserisci un numero :"));

// SE IL NUMERO E' PARI VERRA'STAMPATO
if (numOne % 2 ==0) {
  document.getElementById('numero').innerHTML = numOne;
  console.log(numOne);
}
// ALTRIMENTI AL NUMERO VERRA' SOMMATO UNO
else {
  console.log(numOne + 1);
  document.getElementById('numero').innerHTML = (numOne + 1);
}
