// EL objeto Date

const diaHoy = new Date()

let valor

valor = diaHoy

valor = diaHoy.getFullYear() // Trae el valor del año actual
valor = diaHoy.getMonth() // Trae el valor del mes actual
valor = diaHoy.getMinutes() // Trae el valor de los minutos actuales
valor = diaHoy.getHours() // Trae el valor de la hora actual
valor = diaHoy.getTime() // Trae el valor de los milisegundos contados desde el 1ro enero de 1970 a la fecha

console.log(valor)