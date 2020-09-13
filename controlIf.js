// Estructura de control if

const edad= 18;

if(edad >= 18){
    console.log('Puedes entrar al sitio');
} else{
    console.log('No, no puedes entrar al sitio');
}

// Condiciones else if

let hora = 20;

if(hora > 0 && hora <=10){
    console.log('Buenos días');
} else if(hora > 10 && hora <=18){
    console.log('Buenas tardes');
} else if(hora > 18 && hora <=24){
    console.log('Buenas noches');
} else {
    console.log('Hora no valida');
}

// If ternario

const logueado = true;

console.log( logueado === true ? 'Si se logueó' : 'No se logueó' );