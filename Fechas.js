// Fechas en JavaScript

const diaHoy = new Date();

// Fecha en especifico Mes, día y año

let navidad= new Date('12-25-2017');

console.log(navidad);

// Métodos con los que se usa Date

let valor;

valor = diaHoy.getMonth(); //Obtener Mes
valor = diaHoy.getDate(); //Obtener Dia en el mes
valor = diaHoy.getDay(); //Obtener Día de la semana
valor = diaHoy.getFullYear(); //Obtener Año
valor = diaHoy.getMinutes(); //Obtener Minutos
valor = diaHoy.getHours(); //Obtener Hours
valor = diaHoy.getTime(); //Obtener Milisegundos desde 1970

// Se pueden asignar valores en las fechas, reemplazando los get por set

console.log(valor);