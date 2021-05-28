// every: Todos los elementos de un arreglo deben cumplir la condicion para que retorne un true

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every( producto => producto.precio < 1000)
console.log(resultado) // True

const resultado2 = carrito.every((producto) => producto.precio < 500)
console.log(resultado2) // False