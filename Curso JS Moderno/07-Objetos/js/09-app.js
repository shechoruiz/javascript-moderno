// Sellar un objeto

"use strict"; // Con la declaración de esta linea, Javascript entiende que hay que exigir ciertas reglas al escribir lineas de codigo

const producto = {
  nombre: 'Monitor 20"',
  precio: 300,
  disponible: true,
}

Object.seal(producto) // Con esto, sellamos el elemento para que no se pueda crear nada nuevo luego de su declaración pero facilita editar las propiedades ya existentes

producto.disponible = false
producto.imagen = "imagen.jpg"

console.log(producto);

console.log(Object.isSealed(producto));