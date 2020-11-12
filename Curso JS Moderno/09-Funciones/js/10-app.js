// Arrow functions: Son otra forma de declarar funciones

// Forma vieja
const aprendiendo = function(){
  console.log(`Aprendiendo Javascript`)
}

// Arrow function desde ES6
const aprendiendo2 = () => {
  console.log(`Aprendiendo Javascript`)
}

aprendiendo2()

// Si la function tiene una sola linea, se puede omitir las llaves
const aprendiendo3 = () => console.log(`Aprendiendo JavaScript`)

aprendiendo3()
