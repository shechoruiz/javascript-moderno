// cambiando el css con javascript

// Nota: En CSS las reglas que vienen con 2 palabras, vienen separados por un guion. ejm: background-color: 'red'. Por su parte, para la declaración de estilos desde JS, se elimina el guion y la segunda palabra se junta, declarando su inicial en mayuscula. jm: backgroundColor = 'red

const encabezado = document.querySelector('h1')

// Edición de css usando JS
encabezado.style.backgroundColor = 'red'
encabezado.style.fontFamily = 'Arial'
encabezado.style.textTransform = 'uppercase'

console.log(encabezado)

// Adición y eliminación de clases usando JS
const card = document.querySelector('.card')
card.classList.add('nueva-clase', 'segunda-clase')
card.classList.remove('card')
console.log(card.classList)