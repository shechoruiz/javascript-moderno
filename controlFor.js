// Estructura de control for

for(let i = 0; i < 10; i++){
    console.log(`Número: ${i}`);
}

for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log('Voy en el 5');
        continue;
    }
    console.log(`${i}`);
}

for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        console.log(`El numero ${i} es par`);
    } else{
        console.log(`El numero ${i} es impar`);
    }
}

const arregloProductos = ['Camisa', 'Boleto', 'Guitarra', 'Disco'];

for(let i = 0; i < arregloProductos.length; i++){
    console.log(`El producto es ${arregloProductos[i]}`);
}

