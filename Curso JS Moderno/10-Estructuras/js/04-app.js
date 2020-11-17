// Elseif

const dinero = 300, totalAPagar = 500, tarjeta = true

if(dinero >= totalAPagar){
  console.log('Si podemos pagar')
} else if (tarjeta){
  console.log('Si puedo pagar por que tengo la tarjeta')
} else {
  console.log('Fondos insuficientes')
}