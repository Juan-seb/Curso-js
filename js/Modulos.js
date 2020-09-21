/* import saludar,{PI} from "./constantes.js"
import {aritmetica as ar} from "./aritmeticas.js"

console.log("Archivos del modulo");
console.log(PI);

console.log(ar.sumar(2,5));
saludar("Juan"); */

// Problema 1


let cadena = prompt("Ingresa la cadena de texto");
let contador=0;

for (const letra of cadena) {
    contador++;
}

console.log(contador);

// Problema 2

let cadena2 = prompt("Ingresa la cadena de texto");
let repeticiones = prompt("Ingresa en donde se va a romper la cadena");

const divisiones = (cadena2,repeticiones)=>{
    let contador2 = 0;
    const arrayCadena = [];
    for (const letra of cadena2) {
        if (contador2 === parseInt(repeticiones)) {
            break;
        }else{
            contador2++;
        }
        arrayCadena.push(letra);
    }

    let conComas=arrayCadena.toString()
    console.log(conComas.split(',').join(''))
}

divisiones(cadena2,repeticiones);


// Problema 2, forma 2

let devuelve = cadena2.slice(0,repeticiones);
console.log(devuelve);

//Problema 3

let cadena3 = prompt("Ingrese la cadena 3");
let caracter = prompt("Ingrese el caracter")

const fractura = (cadena3,caracter) =>{
    let arrayChunks = cadena3.split(`${caracter}`)
    return console.log(arrayChunks);
}

fractura(cadena3,caracter);

//Problema 4

let cadena4 = prompt("Ingrese la ultima cadena de texto");
let repeticion2 = prompt("Ingrese las veces en que se repetira el texto");

const rep = (cadena4,repeticion2) => {
    const arrayRep = []
    for (let i = 0; i < parseInt(repeticion2) ; i++) {
        arrayRep.push(cadena4);
    }

    let conComas2 = arrayRep.toString();
    console.log(conComas2.split(',').join(' '));
}

rep(cadena4,repeticion2);


