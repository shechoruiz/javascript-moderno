// Uso de la librería moment.js

const diaHoy = new Date();

moment.locale('es')

console.log(moment().format('MMMM Do YYYY h:mm:ss a'))

console.log(moment().format('LLLL', diaHoy))