// .findIndex: Saber en que indice de nuestro arreglo esta un elemento

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, index) => {
  if(mes === 'Mayo'){
    console.log(`El indice del mes ${mes} es ${index}`)
  }
})

// Uso de la funcion findIndex
const indice = meses.findIndex( mes => mes === 'Abril')
console.log(indice)

const indice2 = carrito.findIndex( producto => producto.nombre === 'Audifonos')
console.log(`La posición de los audifonos es ${indice2}`)