// Traversing the DOM: Recorrer el DOM

const navegacion = document.querySelector('.navegacion')

console.log(navegacion)
console.log(navegacion.firstElementChild) // Primer elemento hijo
console.log(navegacion.lastElementChild) // Ultimo elemento hijo

console.log(navegacion.childNodes) //Los espacios en blanco son considerados elementos al momento de entregar los elementos hijos
console.log(navegacion.children) // Lista los elementos reales

console.log(navegacion.children[0])
console.log(navegacion.children[1].nodeName)
console.log(navegacion.children[1].nodeType)

// traversing (Padre a hijo)

const card = document.querySelector('.card')

card.children[1].children[1].textContent = 'Nuevo Heading desde traversing the DOM' //Asinar texto usando el traversing
card.children[0].src = 'img/hacer3.jpg' //Cambiar imagen usando el traversing

console.log(card.children[0])

// traversing (Hijo a padre)

console.log(card.parentNode) //También considera a los espacios en blanco
console.log(card.parentElement) //Lista los elementos reales

console.log(card.parentElement.parentElement.parentElement)

// Traversing entre hermanos (Arriba hacia abajo)
console.log(card)
console.log(card.nextElementSibling)
console.log(card.nextElementSibling.nextElementSibling)

// Traversing entre hermanos (Abajo hacia arriba)
const ultimoCard = document.querySelector('.card:nth-child(4)')
console.log(card.previousElementSibling)