// Crear objetos dentro de objetos

const producto = {
  nombre: 'Monitor 20"',
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: '1Kg',
      medida: '1m',
    },
    fabricacion: {
      pais: 'China'
    }
  },
}

console.log(producto)
console.log(producto.informacion)
console.log(producto.informacion.medidas.peso)