// Acceso a los valores de un objeto y asignarlos a una variable distinta -> Desestructuracion de objetos

const producto = {
  nombre: 'Monitor 20"',
  precio: 300,
  disponible: true,
}

// Forma vieja
const nombre = producto.nombre

// Forma reciente: Extrae y crea la variable en un solo paso
const { nombre, precio } = producto

console.log(nombre)
console.log(precio)