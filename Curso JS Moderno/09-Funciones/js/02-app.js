// Diferencias entre function declaration y function expression

// Declaracion de funcion - function declaration
sumar()

function sumar() {
  console.log(2+2)
}


// Expresion de funcion - Function expression
sumar2()

const sumar2 = function(){
  console.log(2+3)
}


// La diferencia principal entre los 2, es que las function expressions seran afectadas por el proceso de hoisting