// Etapa 1: Primeros pasos

// Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail')

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
    e.target.classList.add('border', 'border-red-500')
    mostrarError('Todos los mensajes son obligatorios')
  }

  if(e.target.type === 'email'){
    const resultado = e.target.value.indexOf('@') //Versión vieja
    if(resultado < 0){
      mostrarError('Ese email no es valido')
    }
  }
}

// Etapa 3: Limpiar los mensajes de error
function mostrarError(mensaje) {
  const mensajeError = document.createElement('p')
  mensajeError.textContent = mensaje
  mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error')

  const errores = document.querySelectorAll('.error')
  if(errores.length === 0 ){
    formulario.appendChild(mensajeError)
  }
}

// Etapa 4: Validar un email
// En esta etapa buscamos validar que el campo de validación del correo sea de typo "email" y de ahí empezamos a validar si contiene un arroba y un dominio