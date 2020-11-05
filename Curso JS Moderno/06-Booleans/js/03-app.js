// Buenas practicas para usar booleans

const autenticado = true

// Forma anticuada
if (autenticado == true) { // Evaluando algo obvio ya declarado
  console.log('Si puedes ver Netflix')
} else {
  console.log('No, no puedes verlo')
}

// Forma reciente
if(autenticado){
  console.log("Si puedes ver Netflix")
} else {
  console.log("No, no puedes verlo")
}

// Operador ternario
console.log(autenticado ? "Si puedes ver Netflix" : "No, no puedes verlo")