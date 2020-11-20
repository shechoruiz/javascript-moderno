// Eventos con el teclado

const busqueda = document.querySelector('.busqueda')

// Registrar la presion sobre una tecla
busqueda.addEventListener('keydown', () => {
  console.log('Tecla presionada')
})

// Registrar cuando se quita la presion sobre una tecla
busqueda.addEventListener('keyup', () => {
  console.log('Tecla soltada')
})

// Registrar el ingreso y salida de un campo de texto
busqueda.addEventListener('blur', () => {
  console.log('Saliste del campo')
})

// Registrar el copiado de un texto de un campo de texto
busqueda.addEventListener('copy', () => {
  console.log('Copiaste la informacion')
})

// Registrar el pegado de un texto en un campo de texto
busqueda.addEventListener('paste', () => {
  console.log('Pegaste la informacion')
})

// Registrar el corte de un texto de un campo de texto
busqueda.addEventListener('cut', () => {
  console.log('Cortaste la informacion')
})

// Registrar las anteriores acciones en un solo evento - salvo el blur
  busqueda.addEventListener('input', () => {
  console.log('Eventos completos')
})

// Como saber que estoy escribiendo
busqueda.addEventListener('input', (evt) => {
  console.log(evt.target.value)
})