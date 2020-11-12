// Ventajas de un arrow function

// Para pasar parametros, se sigue haciendo uso del parentesis
const aprendiendo3 = (tecnologia) => `Aprendiendo ${tecnologia}`

console.log(aprendiendo3('JavaScript'))

// Si hay un solo parametro entrando en la funcion, se omite declarar los parentesis
const aprendiendo4 = tecnologia => `Aprendiendo ${tecnologia}`

console.log(aprendiendo4('JavaScript'))
