// Parametros por default

function saludar(nombre = 'Desconocido', apellido = ''){ // si no se declara nada en los argumentos, el valor sera otorgado por lo que se declaró acá en los parametros
  console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Sergio', 'Ruiz')