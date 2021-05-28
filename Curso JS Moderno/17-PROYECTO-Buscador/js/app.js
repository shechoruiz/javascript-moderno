// Etapa 1: Primeros pasos

// Variables
const resultado = document.querySelector('#resultado')

// Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos()
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