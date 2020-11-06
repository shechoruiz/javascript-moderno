// Eliminar elementos de un array

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

carrito.push(producto)
carrito.push(producto2)

const producto3 = {
  nombre: 'Teclado',
  precio: 50,
}

carrito.unshift(producto3)

console.table(carrito)

// Eliminar el ultimo elemento de un arreglo
carrito.pop()

console.table(carrito)

// Elimnar el primero elemento de un arreglo
carrito.shift()

console.table(carrito)

// Eliminar un elemento intermedio de un arreglo
carrito.splice(1, 1) //Este recibe 2 parametros, el 1ro reconoce el indice donde comenzara a eliminar y el 2do indica la cantidad de elementos que eliminará desde el indice indicado

console.table(carrito)