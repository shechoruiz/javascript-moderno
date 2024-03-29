// Etapa 1: 1ros pasos

// Variables
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = []

// Event listeners
eventListeners()
function eventListeners() {
  // Cuando el usuario agrega un nuevo tweet
  formulario.addEventListener('submit', agregarTweet)

  // Cuando el documento esta listo
  document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse(localStorage.getItem('tweets')) || []
    console.log(tweets)
    crearHTML()
  })
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

  const tweetObj = {
    id: Date.now(),
    // tweet: tweet
    tweet // Una manera reciente de declarar el nombre de la pareja llave - valor. Es similar a la linea anterior
  }

  // Añadir al arreglo de tweets
  tweets = [...tweets, tweetObj]

  // Una vez agregado, vamos a crear el HTML
  crearHTML()

  // Reiniciar el formulario
  formulario.reset()
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
function crearHTML() {
  limpiarHTML()
  if(tweets.length > 0) {
    tweets.forEach(tweet => {
      // Agregar botón de eliminar
      const btnEliminar = document.createElement('a')
      btnEliminar.classList.add('borrar-tweet')
      btnEliminar.textContent = 'X'

      // Añadir la función de eliminar el tweet
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id)
      }
      // Crear HTM
      const li = document.createElement('li')
      // Añadir el texto
      li.textContent = tweet.tweet
      // Asignar el botón creado
      li.appendChild(btnEliminar)
      // Añadirlos a su respectivo div
      listaTweets.appendChild(li)
    })
  }

  sincronizarStorage()
}

function limpiarHTML() {
  while(listaTweets.firstChild){
    listaTweets.removeChild(listaTweets.firstChild)
  }
}

// Etapa 4: Mostrar los tweets al cargar
// Agregar los tweets actuales al localStorage
function sincronizarStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweets))
}

// Etapa 5: Eliminar los tweets
function borrarTweet(id) {
  tweets = tweets.filter( tweet => tweet.id !== id)
  crearHTML()
}