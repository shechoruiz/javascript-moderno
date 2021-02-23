// Etapa 1: 1ros pasos

// Variables
const carrito = document.querySelector('#carrito'),
      listaCursos = document.querySelector('#lista-cursos'),
      contenedorCarrito = document.querySelector('#lista-carrito tbody'),
      vaciarCarrito = document.querySelector('#vaciar-carrito');
let articulosCarrito = []

cargarEventListeners()
function cargarEventListeners() {
  // Cuando agregas un curso presionando el botón "Agregar al carrito"
  listaCursos.addEventListener('click', agregarCurso)

  // Elimina cursos del carrito
  carrito.addEventListener('click', eliminarCurso)
}

// Funciones
function agregarCurso(e) {
  e.preventDefault()
  if( e.target.classList.contains('agregar-carrito') ){
    const cursoSeleccionado = e.target.parentElement.parentElement
    leerDatosCurso(cursoSeleccionado)
  }
}

// Elimina un curso del carrito
function eliminarCurso(e){
  if(e.target.classList.contains('borrar-curso')){
    const cursoId = e.target.getAttribute('data-id')

    // Elimina del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
    carritoHTML() //Volvemos a iterar sore el carrito y mostramos el nuevo HTML
  }
}

// Etapa 2: Leer los datos del curso seleccionado

// Leer el contenido del HTML al que se le hizo clic y extraer la información del curso
function leerDatosCurso(curso) {
  // console.log(curso)
  // Crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }

  // Revisa si un elemeno ya existe en el carrito
  const existe = articulosCarrito.some( curso => curso.id === infoCurso.id)
  if(existe){
    // Actualizamos la cantidad
    const cursos = articulosCarrito.map(curso => {
      if(curso.id === infoCurso.id){
        curso.cantidad++
        return curso //Retorna el objeto actualizado
      } else {
        return curso //Retorna los objetos que no son los duplicados
      }
    })
    articulosCarrito = [...cursos]
  } else {
    // Agregamos el curso al carrito
    articulosCarrito = [...articulosCarrito, infoCurso]
  }

  // console.log(infoCurso)

  //Agregar elementos al arreglo de carrito
  console.log(articulosCarrito)
  carritoHTML()
}

// Etapa 3: Mostrando en el carrito el curso seleccionado

// Muestra el carrito de compras en el HTML

function carritoHTML() {
  // Limpiar el HTML
  limpiarHTML()
  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>
        <img src="${imagen}" width="100" >
      </td>
      <td>
        ${titulo}
      </td>
      <td>
        ${precio}
      </td>
      <td>
        ${cantidad}
      </td>
      <td>
        <a hef="#" class="borrar-curso" data-id="${id}" >X</a>
      </td>
    `;
    // Agregando el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row)
  })
}

// Elimina los cursos de tbody
function limpiarHTML() {
  // Forma lenta
  // contenedorCarrito.innerHTML = ''

  // Forma con mejor performance
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }
}

// Etapa 4: Mostrar el resto de la información
// En esta etapa se notarán los cambios realizados en la función "carritoHTML". Se han ordenado los td de la imagen, titulo, precio y cantidad de acuerdo al orden de los th (Ver HTML)
// Adicional se hizo un desestructuring del objeto creado (Curso)

// Etapa 5: Actualización de las cantidades, si el elemento ya esta creado en el carrito de compras
// En esta etapa se notarán los cambios realizados en la función "leerDatosCurso". Se ha agregado un .some para identificar si un curso seleccionado ya esta en el carrito de compras y de ser asi, actualizará su valor en 1.

// Etapa 6: Eliminar un curso del carrito
// Bajo esta etapa se ha creado un addEventlistener exclusivo del boton de eliminarCurso que llama una función particular. Dicha funcion se encarga de ubicar el data-id (Atributo diferenciador) con el fin de filtre los resultados que no sean iguales al elemento a eliminar. Luego de eso, se llama nuevamente la función "limpiarHTML" para que refresque el cambio