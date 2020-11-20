// Modificar textos o imagenes con Js

const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado)

console.log(encabezado.innerText) // Trae el contenido, pero si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent) // Trae el contenido, sin importar si el visibility :hidden esta declarado
console.log(encabezado.innerHTML) // Trae el HTML completo

const nuevoHeading = 'Nuevo Heading'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading