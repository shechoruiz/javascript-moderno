// forEach y Map

// forEach es ideal para recorrear arreglos

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript' ]

pendientes.forEach((pendiente, indice) => console.log(`${indice}: ${pendiente}`))

const carrito = [
  { nombre: 'Monitor 27 pulgadas', precio: 500 },
  { nombre: 'Television', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

carrito.forEach(producto => console.log(producto))

// Map: Es exactamente igual al forEach, solo que este crea un nuevo arreglo con los resultados de su filtro

const nuevoArreglo = carrito.forEach(producto => producto.nombre)
const nuevoArreglo2 = carrito.map(producto => producto.nombre)

console.log(nuevoArreglo)
console.log(nuevoArreglo2)