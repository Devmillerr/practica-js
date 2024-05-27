const persona = {
  nombre: "Juan",
  edad: 30,
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  },
};

console.log(persona.nombre);
persona.saludar();

// Añadir una nueva propiedad
persona.profesion = "Ingeniero";
console.log(persona);

// Eliminar una propiedad
delete persona.edad;
console.log(persona);
