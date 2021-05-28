// Etapa 1: Primeros pasos

// Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector("#resetBtn");
const formulario = document.querySelector('#enviar-mail')

const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')

const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
  // Cuando la APP arranca
  document.addEventListener('DOMContentLoaded', iniciarApp)

  // Campos del formulario
  email.addEventListener('blur', validarFormulario)
  asunto.addEventListener('blur', validarFormulario)
  mensaje.addEventListener('blur', validarFormulario)

  // Reinicia el formulario
  btnReset.addEventListener("click", resetearFormulario);

  // Enviar email
  formulario.addEventListener('submit', enviarEmail)
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
    // Elimina los errores
    const error = document.querySelector('p.error')
    if (error) {
      error.remove()
    }

    e.target.classList.remove('border', 'border-red-500')
    e.target.classList.add('border', 'border-green-500')
  } else {
    e.target.classList.remove('border', 'border-green-500')
    e.target.classList.add('border', 'border-red-500')
    mostrarError('Todos los mensajes son obligatorios')
  }

  if(e.target.type === 'email'){
    // const resultado = e.target.value.indexOf('@') //Versión vieja
    // Etapa 5: Validación con expresión regular
    if(er.test( e.target.value )){
      const error = document.querySelector('p.error')
      if(error){
        error.remove()
      }

      e.target.classList.remove('border', 'border-red-500')
      e.target.classList.add('border', 'border-green-500')
    } else {
      e.target.classList.remove('border', 'border-green-500')
      e.target.classList.add('border', 'border-red-500')
      mostrarError('Email no valido')
    }
  }

  // Etapa 6: Validación de formularios
  if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
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

// Etapa 7: Configuración de la simulación de envío de correo
function enviarEmail(e) {
  e.preventDefault();

  // Mostrar el spinner
  const spinner = document.querySelector('#spinner')
  spinner.style.display = 'flex';

  // Después de 3 segundos, ocultar el spinner y mostrar el mensaje
  setTimeout(() => {
    spinner.style.display = 'none'
    // Mensaje de envío correcto
    const parrafo = document.createElement('p')
    parrafo.textContent = 'El mensaje se envío correctamente'
    parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase')
    // Insertar parrafo antes del spinner
    formulario.insertBefore(parrafo, spinner)
    setTimeout(() => {
      parrafo.remove() // Eliminar el mensaje de éxito de envío de "correo"
      resetearFormulario()
    }, 5000);
  }, 3000);
}

// Función que resetea el formulario
function resetearFormulario() {
    formulario.reset();
    iniciarApp();
}

// Etapa 4: Validar un email
// En esta etapa buscamos validar que el campo de validación del correo sea de typo "email" y de ahí empezamos a validar si contiene un arroba y un dominio

// Etapa 5: Validación con expresiones regulares
// Haciendo uso de una expresión regular, vamos a hacer la validación del campo de email de manera mas profesional. Adicional se hace la corrección de colores cuando se ingresa o sale de los campos con o sin información valida

// Etapa 6: Validación de texto en formularios
// Se ha hecho una validación con el fin de revisar que el email, asunto y mensaje tengan valores. De ser así, se ha activado el botón de enviar.