// Arrow functions en un forEach y un map

const carrito = [
  { nombre: 'Monitor 27 pulgadas', precio: 500},
  { nombre: 'Television', precio: 100},
  { nombre: 'Tablet', precio: 200},
  { nombre: 'Audifonos', precio: 300},
  { nombre: 'Teclado', precio: 400},
  { nombre: 'Celular', precio: 700}
]

carrito.forEach(producto => console.log(`${producto.nombre} - Precio ${producto.precio}`))

carrito.map(producto => console.log(`${producto.nombre} - Precio ${producto.precio}`))