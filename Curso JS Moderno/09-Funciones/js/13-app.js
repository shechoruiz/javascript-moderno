// Replicación del ejercicio 09 con arrow functions

const reproductor = {
  reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
  pausar: () => console.log(`Pausando...`),
  borrar: () => console.log(`Borrando canción...`),
  crear: nombre => console.log(`Creando playist ${nombre}`)
}

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar()
reproductor.crear('Las mejores del ayer')

