// Ejemplo mas avanzado de DOM Scripting

const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('.footer')

btnFlotante.addEventListener('click', () => {
  if ( footer.classList.contains('activo') ) {
    // Evalua si la clase 'activo esta declarada en el footer
    footer.classList.remove('activo') // Elimina la clase 'activo
    btnFlotante.classList.remove('activo') // Elimina la clase 'activo
    btnFlotante.textContent = 'Idioma y Moneda' // Cambia el texto del boton
  } else {
    footer.classList.add('activo') // Asigna la clase 'activo
    btnFlotante.classList.add('activo') // Asigna la clase 'activo
    btnFlotante.textContent = 'X Cerrar' // Cambia el texto del boton
  }
})
