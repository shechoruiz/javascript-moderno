// Metodos para los strings - Parte 2

const producto = 'Monitor de 20 pulgadas'
const precio = '30 USD'

// Concatenación de textos con funcion especifica
console.log(producto.concat(precio))
console.log(producto.concat('Soy un string diferente'))

// Concatenacion con operador
console.log(producto + "Con un precio de " + precio)

// Concatenación con template literals
console.log(`Este ${producto} tiene un precio de ${precio}`)
