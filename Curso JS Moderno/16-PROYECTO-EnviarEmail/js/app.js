// Etapa 1: Primeros pasos

// Variables
const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')

eventListeners();
function eventListeners() {
  // Cuando la APP arranca
  document.addEventListener('DOMContentLoaded', iniciarApp)

  // Campos del formulario
  email.addEventListener('blur', validarFormulario)
  asunto.addEventListener('blur', validarFormulario)
  mensaje.addEventListener('blur', validarFormulario)
}

// Funciones
function iniciarApp() {
  btnEnviar.disabled = true
  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}

// Etapa 2: Declaración de variables y funciones del addEventListener
// Esta etapa relaciona las variables y funciones del addEventListener. Adicional se crea la funcion validarFormulario con el fin de dar validación de campo vacio al formulario completo
function validarFormulario(e){
  if(e.target.value.length > 0){
    console.log('Si hay algo')
  } else {
    e.target.style.borderBottomColor = 'red'
    e.target.classList.add('border', 'border-red-500')
  }
}