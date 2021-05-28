// Eliminar y actualizar elementos del localStorage

localStorage.removeItem('nombre')

// Actualizar un registro
const mesesArray2 = JSON.parse(localStorage.getItem('meses'))
mesesArray2.push('Nuevo Mes')
localStorage.setItem('meses', JSON.stringify(mesesArray2))

// Si o si, hay que bajarlo, convertirlo y volverlo a subir bajo la misma llave para que su valor sea actualizado

// Con la siguiente sentencia, limpia por completo el localStorage
localStorage.clear()

