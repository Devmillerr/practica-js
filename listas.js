const numeros = [1, 2, 3, 4, 5];

// Recorrer un array con forEach
numeros.forEach((numero) => {
  console.log(numero);
});

// Mapear un array
const dobles = numeros.map((numero) => numero * 2);
console.log(dobles);

// Filtrar un array
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);

// Reducir un array
const suma = numeros.reduce((total, numero) => total + numero, 0);
console.log(suma);
