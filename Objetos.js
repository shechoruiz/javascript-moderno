// Objetos en JavaScript

// Creacion de objetos

 const persona = {
     nombre: 'Sergio',
     apellido: 'Ruiz',
     profesion: 'Ingeniero',
     email: 'sergio.ruiz@gmail.com',
     edad: 28,
     musica: ['Salsa', 'Electrónica', 'Merengue'],
     hogar: {
         ciudad: 'Villavicencio',
         pais: 'Colombia'
     },
     nacimiento: function(){
         return new Date().getFullYear() - this.edad;
     }
 }

 console.log(persona);

 // Si deseo consultar el valor de una llave especifica, debo anexar el valor de dicha llave a la consulta
 console.log(persona.apellido);
 console.log(persona.musica[1]);
 console.log(persona.hogar.ciudad);
 console.log(persona.nacimiento());

// Arreglo de objetos

const autos = [
    {modelo: 'Mustang', motor: 6.0},
    {modelo: 'Camaro', motor: 6.1},
    {modelo: 'Challenger', motor: 6.2},
];

console.log(autos[1].modelo)

// Objetos: Fución constructora

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto ("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

console.log(autoNuevo.modelo)