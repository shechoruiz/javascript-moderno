// Desestrcuturacion en arrays

const numeros = [10, 20, 30, 40, 50]

const [ , , tercero] = numeros
const [primer, ...segundo] = numeros

console.log(tercero)
console.log(segundo)