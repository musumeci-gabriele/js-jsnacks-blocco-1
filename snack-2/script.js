//  NOTA : INSERISCI DUE PAROLE E VERRANNO STAMPATE IN ORDINE DALLA PIU CORTA ALLA PIU' LUNGA
alert ("INSERISCI DUE PAROLE E VERRANNO STAMPATE IN ORDINE DALLA PIU CORTA ALLA PIU' LUNGA");

// INSERISCI UNA PAROLA
var wordOne = prompt("Inserisci una parola :");
console.log(wordOne);

// INSERISCI LA SECONDA PAROLA
var wordTwo = prompt("Inserisci la seconda parola :");
console.log(wordTwo);

// SE LA PRIMA PAROLA E' PIU' CORTA STAMPALA PER PRIMA
if (wordOne.length < wordTwo.length) {
  console.log (wordOne + wordTwo);
  document.getElementById("parole").innerHTML = (wordOne + " " + wordTwo);
}
// ALTRIMENTI STAMPA PRIMA LA SECONDA PAROLA
else if (wordOne.length > wordTwo.length) {
  console.log(wordTwo + wordOne);
  document.getElementById("parole").innerHTML = (wordTwo + " " + wordOne);
}
// lE DUE PAROLE SONO DI UGUALE LUNGHEZZA
else {
  console.log(wordOne + wordTwo);
  document.getElementById('parole').innerHTML = (wordOne  + " " + wordTwo + " Le due parole sono di egual lunghezza.");
}
