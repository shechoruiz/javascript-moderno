// Object constructor

// Metodo del object literal
const producto = {
  nombre: 'Monitor 20"',
  precio: 300,
  disponible: true,
}

// Metodo del object constructor
function Producto (nombre, precio) {
  this.nombre = nombre
  this.precio = precio
  this.disponible = true
}

const producto2 = new Producto('Monitor de 50 pukgadas', 500)
console.log(producto2)

const producto3 = new Producto('Televisor 4K', 100)
console.log(producto3)
