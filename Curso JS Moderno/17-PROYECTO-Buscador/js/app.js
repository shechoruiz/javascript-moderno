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
  mostrarAutos() //Muestra los automoviles al cargar

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
})

maximo.addEventListener('change', e => {
  datosBusqueda.maximo = e.target.value
})

puertas.addEventListener('change', e => {
  datosBusqueda.puertas = e.target.value
})

transmision.addEventListener('change', e => {
  datosBusqueda.transmision = e.target.value
})

color.addEventListener('change', e => {
  datosBusqueda.color = e.target.value
  console.log(datosBusqueda)
})


// Funciones
function mostrarAutos() {
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

function filtrarAuto() {
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear)
  console.log(resultado)
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