// Operador O: || Revisa que al menos se cumpla una de las condiciones

const efectivo = 300, credito = 400, disponible = efectivo + credito, totalPagar = 600

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
  console.log(`Si podemos pagar`)
} else {
  console.log(`Fondos insuficientes`)
}