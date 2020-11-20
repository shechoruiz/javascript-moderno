// Eventos propios de un formulario

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e) {
  e.preventDefault() // Previene la ejecucion por defecto del action declarado en el formulario
  console.log(e)
}