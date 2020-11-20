// QuerySelector: Actua similar a getElementById, pero permite seleccionar incluso clases y retornará solo el 1ro que encuentre

const card = document.querySelector('.card')
console.log(card)

// Podemos tener selectores especifics como en css
const info = document.querySelector('.premium .info')
console.log(info)

// Seleccionar el 2do cart de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard)

// Seleccionar con id
const formulario = document.querySelector('#formulario')
console.log(formulario)

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav')
console.log(navegacion)