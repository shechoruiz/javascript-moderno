// Adicion de elementos a un array usando el spread operator

const carrito = []

// Definicion de un producto
const producto = {
  nombre: 'Monitor de 32"',
  precio: 400,
}

const producto2 = {
  nombre: 'Celular',
  precio: 800,
}

const producto3 = {
  nombre: 'Teclado',
  precio: 50,
}

let resultado;

resultado = [...carrito, producto]
resultado = [...resultado, producto2]
resultado = [producto3, ...resultado]

console.table(resultado)