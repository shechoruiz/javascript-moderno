// Estructura de control forEach (Mas que todo para arreglos)

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender JavaScript'];

pendientes.forEach(function(pendiente, index){
    console.log(`${index} : ${pendiente}`);
});

// Funcion map para recorrer un arreglo

const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Guitarra'},
    {id: 4, producto: 'Disco'}
];

const nombreProducto = carrito.map(function(carrito){
    return carrito.producto;
});

console.log(nombreProducto);