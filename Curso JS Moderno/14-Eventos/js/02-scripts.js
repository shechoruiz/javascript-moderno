// Eventos con el mouse

const nav = document.querySelector('.navegacion')

// Registrar un click
nav.addEventListener('click', () => {
  console.log('Clic en el nav')
})

// Registrar el ingreso del mouse en un area
nav.addEventListener('mouseenter', () => {
  console.log('Mouse sobre el nav')
})

// Registrar la salida del mouse de un area
nav.addEventListener('mouseout', () => {
  console.log('Mouse saliendo del nav')
})

// Registrar cuando se presiona el clic del mouse en un area
nav.addEventListener('mousedown', () => {
  console.log('Mouse presionando el clic en el nav')
})

// Registrar cuando se suelta el clic del mouse en un area
nav.addEventListener('mouseup', () => {
  console.log('Mouse soltando el clic en el nav')
})

// Registrar el doble clic del mouse en un area
nav.addEventListener('dblclic', () => {
  console.log('Mouse con doble clic en el nav')
})