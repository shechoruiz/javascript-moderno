// Eventos con el Scroll

window.addEventListener('scroll', () => {
  // const scrollPX = window.scrollY
  // console.log(scrollPX)

  const premium = document.querySelector('.premium')
  const ubicacion = premium.getBoundingClientRect() //Esta funcion indica en que lugar esta un elemento y cuanto queda de scroll para hallarlo
  // console.log(ubicacion)

  if(ubicacion.top < 784){
    console.log('El elemento ya esta visible')
  } else {
    console.log('Aun no esta visible')
  }
})