// Acceso de elementos dentro del dom

let elemento

elemento = document
elemento = document.all //Describe todas las etiquetas usadas en la pagina
elemento = document.head //Trae la información declarada en el head
elemento = document.body //Trae la información declarada en el body
elemento = document.domain //Trae el dominio actual
elemento = document.forms //Trae todos los forms declarados en el documento
elemento = document.forms[0]
elemento = document.forms[0].id
elemento = document.forms[0].method
elemento = document.forms[0].classList
elemento = document.forms[0].action

elemento = document.links //Trae todos los links usados en la pagina
elemento = document.links[4]
elemento = document.links[4].classList
elemento = document.links[4].className

elemento = document.images

elemento = document.scripts

console.log(elemento)