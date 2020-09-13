// Funciones en JavaScript

// Creacion de funciones

// 1. Metodo normal

/*  function saludar(){   //Espacio de declaración
    console.log('Hola sergio');
}

saludar();    //Espacio de llamado */

/* function saludar(nombre){   //Espacio de declaración con un parametro
    console.log(`Hola ${nombre}`);
}

saludar('Diego');   //Espacio de llamado de la función con un parametro */

function sumar(a,b){
    console.log(a + b);
}

sumar(1,2);


// 2. Function expression

const suma = function(a,b){
    return a + b;
}

console.log(suma(1,2));
console.log(suma(5,5));

// 3. Funciones que se declaran e invocan inmediatamente IIFE

(function(){
    console.log('Creando un IIFE')
})();

// De igual manera se le pueden pasar parametros a estas funciones IIFE
(function(tec){
    console.log(`Aprendiendo ${tec}`);
})('Javascript');

// 4. Método de propiedad
// Cuando una funcion se pone dentro de un objeto

const musica = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion id ${id}`);
    },
    pausar : function(){
        console.log(`Pausando la cancion`);
    }
}

musica.reproducir(30);
musica.pausar();

// Uso de Try Catch

function obtenerclientes(){
    console.log('Descargando..');
    setTimeout(function(){
        console.log('Completo')
    }, 3000);
}

try{
    algo();
} catch(error){
    console.log(error)
} finally{
    console.log('No me interesa, igualmente lo ejecutare.')
}

obtenerclientes();

/* ################################################## */

// Como sabéis hay dos formas de declarar funciones en javascript, forma declarativa y a través de una expresión.


//  Funcion declarativa
function prueba(){
 return x+y;
};

// Function expresiva
var prueba = function(){
 return x+y;
};

// A priori podemos pensar que el uso de un tipo u otro, nos ofrece el mismo resultado, pero no ser así. La cuestión es que ambas instrucciones son evaluadas por javascript en diferentes momentos. En concreto las funciones declarativas se ejecutan antes que cualquier otra y las expresiones, son evaluadas cuando el intérprete alcanza su posición. Esto es importante conocerlo ya que nos pueden generar problemas.