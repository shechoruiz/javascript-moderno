// Etapa 1: Primeros pasos

// Variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
const resultado = document.querySelector('#resultado')

const max = new Date().getFullYear()
const min = max - 10

// Generar un objeto con la busqueda
const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(autos) //Muestra los automoviles al cargar

  // Llenar las opciones de años
  llenarSelect()
})

// Etapa 3: Leer el valor de las selecciones de los listados
// Event listener para los select de busqueda
marca.addEventListener('change', e => {
  datosBusqueda.marca = e.target.value
  filtrarAuto()
})

year.addEventListener('change', e => {
  datosBusqueda.year = parseInt(e.target.value)
  filtrarAuto()
})

minimo.addEventListener('change', e => {
  datosBusqueda.minimo = e.target.value
  filtrarAuto()
})

maximo.addEventListener('change', e => {
  datosBusqueda.maximo = e.target.value
  filtrarAuto()
})

puertas.addEventListener('change', e => {
  datosBusqueda.puertas = parseInt(e.target.value)
  filtrarAuto()
})

transmision.addEventListener('change', e => {
  datosBusqueda.transmision = e.target.value
  filtrarAuto()
})

color.addEventListener('change', e => {
  datosBusqueda.color = e.target.value
  filtrarAuto()
  console.log(datosBusqueda)
})


// Funciones
function mostrarAutos(autos) {
  // Eliminar el HTML previo
  limpiarHTML();
  autos.forEach(auto => {
    const { marca, modelo, year , puertas, transmision, precio, color } = auto
    const autoHTML = document.createElement('p')
    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
    `;

    // Insertar en HTML
    resultado.appendChild(autoHTML)
  })
}

// Limpiar HTML
function limpiarHTML() {
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild)
  }
}

// Etapa 2: Generación de select para años

function llenarSelect () {
  for(let i = max; i >= min; i--) {
    const opcion = document.createElement('option')
    opcion.value = i
    opcion.textContent = i
    year.appendChild(opcion)
  }
}

// Etapa 4: filtro por marca

function filtrarAuto() { // Función de alto nivel
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

  if(resultado.length){
    mostrarAutos(resultado)
  } else {
    noResultado()
  }
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda
  if( marca ) {
    return auto.marca === marca
  }
  return auto
}

// Etapa 5: filtrar por año

function filtrarYear(auto) {
  const { year } = datosBusqueda;
  if (year) {
    return auto.year === year;
  }
  return auto;
}

// Etapa 6: Mostrar los resultados del filtro en el HTML
// Se modifica la funcion mostrarAutos con el fin de que reciba argumentos, con el fin de que reciba los autos filtrados. Luego, se crea una función que limpie el HTML antes de que se vuelva a dibujar

// Etapa 7: filtrar por precios

function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}

function filtrarMaximo(auto) {
  const { maximo } = datosBusqueda;
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}

// Etapa 8: filtrar por puertas, transmision y color

function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}

function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}

function filtrarColor(auto) {
  const { color } = datosBusqueda;
  if (color) {
    return auto.color === color;
  }
  return auto;
}

// Etapa 9: Mostrar mensaje cuando no hay resultados

function noResultado() {
  limpiarHTML()
  const noResultado = document.createElement('div')
  noResultado.classList.add('alerta', 'error')
  noResultado.textContent = 'No hay resultados!.. Intenta con otros términos de búsqueda'
  resultado.appendChild(noResultado)
}