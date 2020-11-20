// Eliminar elementos del DOM

const primerEnlace = document.querySelector('a')

console.log(primerEnlace)

// Eliminar un elemento por si mismo
primerEnlace.remove()

// Eliminar elemento desde el padre
const navegacion = document.querySelector('.navegacion')
console.log(navegacion.children) //Identificamos el indice
navegacion.removeChild(navegacion.children[2]) //Eliminamos el nodo especifico