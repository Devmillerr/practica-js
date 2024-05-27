let numero = 10;

// Condicional if
if (numero > 0) {
  console.log("El número es positivo.");
}

// Condicional if...else
if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número no es negativo.");
}

// Condicional if...else if...else
if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

// Condicional switch
let color = "rojo";
switch (color) {
  case "rojo":
    console.log("El color es rojo.");
    break;
  case "azul":
    console.log("El color es azul.");
    break;
  default:
    console.log("Color desconocido.");
}
