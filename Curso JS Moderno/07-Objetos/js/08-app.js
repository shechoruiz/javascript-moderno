// Bloquear o congelar un objeto

"use strict"; // Con la declaración de esta linea, Javascript entiende que hay que exigir ciertas reglas al escribir lineas de codigo

const producto = {
  nombre: 'Monitor 20"',
  precio: 300,
  disponible: true,
}

Object.freeze(producto) // Con esto, bloqueo o congelo el elemento para que no se pueda editar ni crear nada nuevo luego de su declaración

producto.disponible = false
producto.imagen = "imagen.jpg"

console.log(producto);

console.log(Object.isFrozen(producto));