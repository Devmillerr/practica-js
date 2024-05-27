// Función declarada
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}

saludar("Miller");

// Función expresada
const despedir = function (nombre) {
  console.log(`Adiós, ${nombre}!`);
};

despedir("miller");

// Función de flecha
const multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 3));
