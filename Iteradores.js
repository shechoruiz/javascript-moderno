// Iteradores en JavaScript

const ciudades = ['Londres', 'Nueva York', 'Madrid','Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion','desarrollador web');

// ##### Entries iterador (Regresa llave y valor)

for (let entrada of ciudades.entries()){
    console.log(entrada);
}

for (let entradas of ordenes.entries()){
    console.log(entradas);
}

for(let entrada of datos.entries()){
    console.log(entrada);
}

// ##### Values iterador (Regresa solamente el valor)

for (let entrada of ciudades.values()){
    console.log(entrada);
}

for (let entradas of ordenes.values()){
    console.log(entradas);
}

for(let entrada of datos.values()){
    console.log(entrada);
}

// ##### Keys iterador (Regresa solamente las keys)

for (let entrada of ciudades.keys()){
    console.log(entrada);
}

for (let entradas of ordenes.keys()){
    console.log(entradas);
}

for(let entrada of datos.keys()){
    console.log(entrada);
}

// ##### DEfault (No define que tipo de iterador se desea)

for (let entrada of ciudades){
    console.log(entrada);
}

for (let entradas of ordenes){
    console.log(entradas);
}

for(let entrada of datos){
    console.log(entrada);
}

// ########## Iteradores para strings

const mensaje = 'Aprendiendo JavaScript';

// Método antiguo
for (let i = 0; i< mensaje.length; i++){
    console.log(mensaje[i]);
}

// Método nuevo
for(let letra of mensaje){
    console.log(letra);
}