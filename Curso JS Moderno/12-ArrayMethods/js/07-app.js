// concat: Unir 2 arreglos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']
const meses2 = ['Agosto', 'Septiembre', 'Octubre']
const meses3 = [ 'Noviembre', 'Diciembre']

// Concat
const resultado = meses.concat(meses2, meses3)
console.log(resultado)

// Spread operator
const resultado2 = [...meses, ...meses2, ...meses3]
console.log(resultado2)