// Etapa 1: 1ros pasos

// Variables
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = []

// Event listeners
eventListeners()
function eventListeners() {
  formulario.addEventListener('submit', agregarTweet)
}

// Funciones
function agregarTweet(e) {
  e.preventDefault()
  // Textarea donde el usuario escribe
  const tweet = document.querySelector('#tweet').value;

  // Validación
  if(tweet === ''){
    mostrarError('Un mensaje no puede ir vacio')
    return // Evta que se ejecute mas líneas de código
  }
  console.log('Acá se ejecuta')
}

// Etapa 2: Validar el formulario
// Mostrar mensaje de error

function mostrarError(error) {
  const mensajeError = document.createElement('p')
  mensajeError.textContent = error
  mensajeError.classList.add('error')

  // Insertarlo en el contenido
  const contenido = document.querySelector('#contenido')
  contenido.appendChild(mensajeError)
  setTimeout(() => {
    mensajeError.remove()
  }, 3000);
}

// Etapa 3: Mostrar los tweets
