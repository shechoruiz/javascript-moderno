// Arreglos en JavaScript

// Creación de arreglos

const numeros = [10, 20, 30, 40, 50, 60]
console.log(numeros);

// Arreglo de strings (Método alternativo)
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
console.log(meses);

// Arreglo mezclado
const mezclado = ['Hola', 20, true, null, false, undefined]
console.log(mezclado);

/* ################################################## */

// Métodos usuales en arreglos
console.log(meses.length); //Entrega el tamaño del arreglo
console.log(Array.isArray(meses)); //Valida si el elemento es un arreglo
console.log(meses[1]); //Imprime el numero de la posición index deseada

// Si se desea agregar un elemento adicional al array, se puede hacer de estas maneras:
meses[4] = 'Mayo';
meses.push('Junio');
meses.unshift('Mes 0'); //Añade al inicio del arreglo

// Si la intención es buscar elementos en un arreglo, la manera es la siguiente:
console.log(meses.indexOf('Abril'));

// Como eliminar un elemento de un arreglo:
meses.pop(); //Este elimina el ultimo elemento del arreglo
meses.shift(); // Este elimina el primer elemento del arreglo
meses.splice(2,1) //Este elimina el elemento indicado en la 1ra propiedad y avanza la cantidad de elementos que indica la 2da propiedad

// Otros metodos adicionales
meses.reverse() //Altera totalmente el orden incial del arreglo

let arreglo1 = [1, 2, 3],
    arreglo2 = [9, 8, 7];

console.log(arreglo1.concat(arreglo2)); //Une un arreglo con otro

// Como ordenar un arreglo
const frutas = ['Banano', 'Fresa', 'Naranja', 'Manzana', 'Anon']
frutas.sort() //Ordena alfabeticamente
console.log(frutas);

// Ordenar numeros
arreglo3 = [3, 9, 81, 55, 12, 7, 23, 75, 60, 120];
arreglo3.sort(function (x, y) { //El sort funciona pero calcula el orden distinto
    return x-y; //por eso se añade esta pequeña funcion para que corrija la situacion
});
console.log(arreglo3);

// console.log(meses);

/* ################################################## */

// Métodos de recorrer los arrays

// Método filter

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// Método map

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//Método Find

var encuentraArticulo = articulos.find(function (articulo){
    return articulo.nombre === "Laptop"
})

// Método ForEach -- Este no crea un nuevo array al ejecutarse

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

// Método some -- Retorna unicamente valores booleanos de acuerdo a la condicion

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
})