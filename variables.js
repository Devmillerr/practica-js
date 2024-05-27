// Declaración con var
var nombre = "Mller";
console.log(nombre);

// Declaración con let
let edad = 22;
console.log(edad);

// Declaración con const
const ciudad = "Chimbote";
console.log(ciudad);

// Diferencias de ámbito entre var y let/const
if (true) {
  var globalVar = "Esta es una variable global";
  let blockLet = "Esta es una variable de bloque";
  const blockConst = "Esta es una constante de bloque";
}

console.log(globalVar); // Funciona
// console.log(blockLet); // Error
// console.log(blockConst); // Error
