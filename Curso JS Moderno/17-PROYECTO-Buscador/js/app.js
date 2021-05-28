// Etapa 1: Primeros pasos

// Variables
const resultado = document.querySelector('#resultado')
const year = document.querySelector('#year')
const max = new Date().getFullYear()
const min = max - 10

// Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos() //Muestra los automoviles al cargar

  // Llenar las opciones de años
  llenarSelect()
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