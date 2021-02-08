// Etapa 1: 1ros pasos

// Variables
const carrito = document.querySelector('#carrito'),
      listaCursos = document.querySelector('#lista-cursos'),
      contenedorCarrito = document.querySelector('#lista-carrito tbody'),
      vaciarCarrito = document.querySelector('#vaciar-carrito')

cargarEventListeners()
function cargarEventListeners() {
  // Cuando agregas un curso presionando el botón "Agregar al carrito"
  listaCursos.addEventListener('click', agregarCurso)
}

// Funciones
function agregarCurso(e) {
  e.preventDefault()
  if( e.target.classList.contains('agregar-carrito') ){
    const cursoSeleccionado = e.target.parentElement.parentElement
    leerDatosCurso(cursoSeleccionado)
  }
}

// Etapa 2: Leer los datos del curso seleccionado

// Leer el contenido del HTML al que se le hizo clic y extraer la información del curso
function leerDatosCurso(curso) {
  console.log(curso)
  // Crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }

  console.log(infoCurso)
}

// Etapa 3: Mostrando en el carrito el curso seleccionado