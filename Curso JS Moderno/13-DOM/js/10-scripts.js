// Generar HTML desde JavaScript

const enlace = document.createElement('a')

// Agregandole el texto
enlace.textContent = 'Nuevo enlace'

// Agregando el href
enlace.href = '/nuevo-enlace'

console.log(enlace)

const navegacion = document.querySelector('.navegacion')

navegacion.appendChild(enlace) //Lo agrega al final del nodo seleccionado

console.log(navegacion.children) // Obtenemos los indices de los elementos
navegacion.insertBefore(enlace, navegacion.children[1]) // Permite indicar antes de que posición debe colocar mi elemento

// Ejercicio: Crear una card

const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p')
parrafo3.textContent = '$800 por persona'
parrafo3.classList.add('precio')

// - Crear un div con la clase info

const info = document.createElement('div')
info.classList.add('info')

info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// - Crear la imagen
const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'

// - Crear el card
const card = document.createElement('div')
card.classList.add('card')

// - Asignar la imagen y la info
card.appendChild(imagen)
card.appendChild(info)

// - Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card) // Insertar al final
contenedor.insertBefore(card, contenedor.children[0]) // Insertando al inicio

console.log(parrafo1)
console.log(parrafo2)
console.log(parrafo3)
console.log(card)