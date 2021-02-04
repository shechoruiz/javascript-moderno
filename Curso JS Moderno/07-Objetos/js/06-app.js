// Desestructuracion de objetos anidados

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
      pais: 'China',
    },
  },
}

// Si necesito llegar mas profundo dentro de los objetos anidados, debo ir llamando con los dos puntos y las llaves las respectivas propiedades
const { nombre, informacion: { fabricacion } } = producto

console.log(nombre)
console.log(fabricacion)
