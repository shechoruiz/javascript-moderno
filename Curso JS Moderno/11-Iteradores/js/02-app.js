// Break y continue en un for loop

// Break: Corta la ejecución de un for loop
// Continue: Permite interceptar un elemento, identificarlo y continuar la ejecucion

// Ejemplo de Break

for (let i = 0; i < 10; i++) {
  if(i === 5){
    break
  }
  console.log(`Numero: ${i}`)
}

// Ejemplo de continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('Numero: Cinco')
    continue
  }
  console.log(`Numero: ${i}`)
}

// Ejemplo algo mas particular

const carrito = [
  { nombre: 'Monitor 27 pulgadas', precio: 500 },
  { nombre: 'Television', precio: 100 },
  { nombre: 'Tablet', precio: 200, descuento: true },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

for (let i = 0; i < carrito.length; i++) {
  if(carrito[i].descuento){
    console.log(`El articulo ${carrito[i].nombre} tiene descuento`)
    continue
  }
  console.log(carrito[i].nombre)
}