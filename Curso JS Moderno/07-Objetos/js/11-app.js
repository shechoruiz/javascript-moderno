// Funciones en objetos y acceso a sus valores

// This facilita que podamos tomar los valores declarados dentro del mismo objeto, ya que por defecto él buscará las variables en el scope global

const producto = {
  nombre: 'Monitor 20"',
  precio: 300,
  disponible: true,
  mostrarInfo: function(){
    console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
  }
}

producto.mostrarInfo()
