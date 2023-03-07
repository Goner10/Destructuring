//DADO EL SIGUIENTE OBJETO
  
const empleados = [
 { name: "Luis", email: "Luis@gmail.com" },
 { name: "Ana", email: "Ana@gmail.com" },
 { name: "Andrea", email: "Andrea@gmail.com" },
  ];


//Extrae la empleada Ana con todos sus datos personales:
 const [,Ana] = empleados
 console.log (Ana)
  
//Extrae el email del empleado Luis --> Luis@gmail.com

const [Luis] = empleados
const{email}= Luis
console.log(email)  

  

//DADO EL SIGUIENTE OBJETO:
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

//Cambia el nombre de la propiedad “name” por “nombre
 
const {name:nombre}= pokemon

// Extrae el nombre del Pokemon
console.log(nombre)

//Extrae el tipo de pokemon que es
const {type} = pokemon
console.log(type)

//Extrae el movimiento "Tackle"

const {moves} = pokemon
const [,tackle]= moves
console.log(tackle)



// 2. EJERCICIOS SPREAD/REST

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:


const mergePoke = {...pokemon,...pikachu}
console.log(mergePoke)

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

function sumEveryOther(...sumNum) {
    console.log(sumNum)
    let sumaTot = 0;
  for (let num of sumNum) {
    sumaTot += num;
  }
  return sumaTot;
}

console.log(sumEveryOther(1, 2, 3, 4, 5))

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.


function addOnlyNums(...args) {
    console.log (args)
    let sum = 0;
    for (let arg of args) {
      if (typeof arg === 'number' && !isNaN(arg)) {
        sum += arg;
      } else if (typeof arg === 'string' && !isNaN(Number(arg))) {
        sum += Number(arg);
      }
    }
    return sum;
  }

  console.log (addOnlyNums(1, 'goner', 10, 11))



  // Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs(...animales) {
  console.log (animales)
  return animales.length;
  }
  
  console.log (countTheArgs('hola', 'tete')); 


  // Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

arr1 = ["Hola", "soy", "Gonzalo"]
arr2 = [10, 11, 22]

console.log (combineTwoArrays(arr1, arr2))
