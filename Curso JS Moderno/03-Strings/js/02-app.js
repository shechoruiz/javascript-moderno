// Metodos para los strings  Parte 1

const producto = 'Monitor de 20 pulgadas'

// Conocer la cantidad de caracteres de la cadena de texto
console.log(producto.length)

// Busca el texto particular y si lo encuentra, indica su posición dentro de la variable
console.log(producto.indexOf('Monitor'))

// Busca el texto en particular e indica con true o false su posible coincidencia. Es sensible a la minusculas y mayusculas
console.log(producto.includes('Monitor'))