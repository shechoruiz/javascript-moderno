// Array Methods: includes y some

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo

meses.forEach(mes => {
    console.log(mes)
    if (mes === 'Enero') {
        console.log(`Enero si existe`)
    }
});

// Comprobar si un valor existe en un arreglo usando un array method

const resultado = meses.includes('Enero') //Este retorna un true o false
console.log(resultado)

// En un arreglo de objetos, includes no funcionará. Para esto, debemos hacer uso del .some. Es el inverso de la funcion every ya que determina si al menos uno de los elementos cumple la funcion
const existe = carrito.some(producto => producto.nombre === 'Celular')
console.log(existe)

// Some también soporta su uso en un arreglo tradicional
const exite2 = meses.some(mes => mes === 'Febrero')
console.log(exite2)