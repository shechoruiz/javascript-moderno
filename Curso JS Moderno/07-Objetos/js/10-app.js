// Como unir 2 objetos

const producto = {
  nombre: 'Monitor 20"',
  precio: 300,
  disponible: true,
}

const medidas = {
  peso: '1Kg',
  medida: '1m'
}

console.log(producto)
console.log(medidas)

// Funcion assign
const resultado = Object.assign(producto, medidas)

console.log(resultado)

// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas}

console.log(resultado2)