// Metodos para objetos

const producto = {
  nombre: 'Monitor 20"',
  precio: 300,
  disponible: true,
}

console.log(Object.keys(producto)) //Retornará un arreglo con los keys o propiedades del arreglo indicado

console.log(Object.values(producto)) //Retornará un arreglo con los valores declarados en las keys del arreglo indicado

console.log(Object.entries(producto)) // Retornará toda la información en pares: key - value
