// Detener la ejecución de un if con una funcion

const autenticado = true

if(autenticado === true){
  console.log('El usuario esta autenticado')
  }

if(autenticado){ //De acuerdo a la declaración, esta es una buena práctica
  console.log('El usuario esta autenticado')
}

// Tmbien habrán escenarios donde los ifs puedan presentar lineas de códigos donde ambas se impriman por su condición, para evitar esto, se puede definir un return para que un if se ejecute y culmine el proceso; evitando pasar por otros ifs.
// Para esto, los ifs deben estar contenidos en una funcion

const puntaje = 450

function revisarPuntaje(){
  if (puntaje > 400){
    console.log('Excelente!')
    return
  }

  if (puntaje > 300){
    console.log('Buen puntaje... Felicidades!')
    return
  }
}

revisarPuntaje()