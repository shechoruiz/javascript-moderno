/* Variables: Palabra reservada var

Estas facilitan que su valor pueda ser redeclarado y reinicializado mas adelante

*/

var producto = "Monitor de 24 pulgadas";
console.log(producto);

// Ejempl de reinicializacion
producto = "Monitor de 19 pulgadas";
console.log(producto);

// JavaScript es un lenguaje de tipo dinamico, no se especifica el tipo de dato
producto = 20;
console.log(producto);

// Se puede declarar sin inicializar y luego asignarlo después
var disponible;
disponible = true;
disponible = false;

// Declarar e inicializar multiples variables
var categoria = "Computadora",
  marca = "Marca famosa",
  cailificacion = 5;

// Las variables no pueden iniciar con numeros
//var 99dias;
var dias99;

//var 01_;
var _01;
var __01;

// Formas de nombrar variables
var nombreProducto; //Camelcase
var nombre_producto_categoria_precio; //UnderscoreCase
var Producto; //PascalCase
