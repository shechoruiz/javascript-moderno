// Agregar nuevos valores a un array - Parte 2

const carrito = []

// Definicion de un producto
const producto = {
  nombre: 'Monitor de 32"',
  precio: 400
}

const producto2 = {
  nombre: 'Celular',
  precio: 800
}

// Agregar un nuevo elemento al final del array
carrito.push(producto)
carrito.push(producto2)

const producto3 = {
  nombre: 'Teclado',
  precio: 50,
}

//Agregar un nuevo elemento al inicio del array
carrito.unshift(producto3)

console.table(carrito)