// Añadir funciones en un objeto

// Ejemplo reproductor de musica

const reproductor = {
  reproducir: function(id){
    console.log(`Reproduciendo canción con el id ${id}`)
  },
  pausar: function(){
    console.log(`Pausando...`)
  },
  borrar: function(){
    console.log(`Borrando canción...`)
  },
  crear: function(nombre){
    console.log(`Creando playist ${nombre}`)
    return nombre
  }
}

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar()
reproductor.crear('Las mejores del ayer')

