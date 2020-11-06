// Recorrer un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

console.table(meses)

// Cuanto mide el arreglo
console.log(meses.length)

// Iterador para recorrer el array
for(let i= 0; i < meses.length; i++){
  console.log(`Este es el elemento ${i+1} del array: ${meses[i]}`)
}