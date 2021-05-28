// Como agregar elementos al local storage

localStorage.setItem('nombre', 'Sergio')

// LocalStorage y SessionStorage se diferencian dado que el 1ro persiste mas dado que puedo cerrar el navegador, apagar la computadora, prenderla al día siguiente y los datos se mantienen. SessionStorage es distinto, dado que al momento de cerrar el navegador, los datos se pierden.

sessionStorage.setItem('nombre', 'Andrés')

// Una peculiaridad es que localStorage solo guarda Strings, por lo que no se pueden guardar arreglos ni objetos. Pero hay una "trampa" que permite hacerlo: Convertir tanto el objeto como el arreglo con JSON.stringify

const producto = {
  nombre: 'Monitor 20 \"',
  precio: 300
}

const productoString = JSON.stringify(producto)
localStorage.setItem('producto', productoString)

const meses = ['Enero', 'Febrero', 'Marzo']
localStorage.setItem('meses', JSON.stringify(meses));
