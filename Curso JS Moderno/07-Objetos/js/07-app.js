// Problema con los objetos

const producto = {
  nombre: 'Monitor 20"',
  precio: 300,
  disponible: true,
}

producto.disponible = false
console.log(producto)

// Como ves, cuando se trata de objetos const permite la edicion de las propiedades de dicho objeto. no se limita solo a la edicion, ya que permite tambien eliminar