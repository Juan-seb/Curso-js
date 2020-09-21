//Ejercicio 5

/* let cadena = prompt ("Ingrese la cadena a voltear");
let cadenaReverso = cadena.split('').reverse().join('');

console.log(cadenaReverso); */

//Ejercicio 6

/* let cadena2 = prompt("Ingrese la cadena 2").split(' ');
let wordBreak = prompt("Ingresar la palabra a buscar");
let contador = 0;

console.log(cadena2);

cadena2.forEach(element => {
    if (element === wordBreak){
        contador++;
    }
});

console.log(contador); */

// Ejercicio 7

/* let cadena3 = prompt("Ingrese la cadena para mirar si es palindroma").toUpperCase();
let cadena3Reverse = cadena3.split('').reverse().join('');

if (cadena3 === cadena3Reverse){
    console.log("Es una palabra palindroma");
} */

// Ejercicio 8

/* const deletePatron = (c, ...a) => {
    const arrayPattern = []
    for (let i = 0; i < a.length; i++) {
        arrayPattern.push(a[i].split(`${c}`).join(''));
    }

    console.log(arrayPattern);
}

deletePatron("mundo", "mundo1", "mundo2","mundo3"); */

// Ejercicio 9

let numero = (Math.random()*100)+500;
console.log(numero);

// Ejercicio 10

/* let chain = prompt("Ingrese el numero a evaluar");
let reverseChain = chain.split('').reverse().join('');

if(chain === reverseChain){
    console.log("Es un numero capicua");
} */

//Ejercicio 11

/* const factorial = (numero) => {

    let num = 1;
    for (let i = 1; i <= numero; i++) {
        num = num*i;
    }
    console.log(num);
}

factorial(5); */

// Ejercicio 12

/* const cousinNumber = (numero) => {
    let cont = 2;

    for (let i = 1; i <= numero ; i++) {
        if ((numero % i) === 0){
            cont--;  
        } 
    }

    if(cont === 0){
        console.log("Es un numero primo");
    }else{
        console.log("No es un numero primo");
    }

}

cousinNumber(27); */

// Ejercicio 13

/* const pair = (numero) => {

    if (numero % 2 === 0){
        console.log("Es un numero par");
    }else{
        console.log("Es un numero impar");
    }
}

pair(7); */

// Ejercicio 14

/* const bin = (num,base) => {

    if (base === 2 || base === 8 || base === 16 ){
        console.log(num.toString(base));
    }else{
        console.log("La base no es valida");
    }

}

let num2 = prompt("Ingrese el numero en decimal o binario");
let base = prompt("Ingrese la base a convertir");

bin(parseInt(num2),parseInt(base)); */

// Ejercicio 15

/* const discount = (numero, descuento) => {
    let newValue = numero-((numero/100)*descuento);
    console.log(newValue);
}

discount(1000,30); */

// Ejercicio 18

/* let cadena = prompt ("Ingrese la cadena").toLowerCase();
let contVowels = 0;
let contConsonants = 0;
for (const letras of cadena) {
    switch (letras) {
        case "a":
            contVowels++;
            break;

        case "e":
            contVowels++;
            break;

        case "i":
            contVowels++;
            break;

        case "o":
            contVowels++;
            break;

        case "u":
            contVowels++;
            break;
        
        case " ":
            
            break;    

        default:
            contConsonants++;
            break;
    }
}

console.log(`Las vocales son ${contVowels}`);
console.log(`Las consonantes son ${contConsonants}`); */

// Ejercicio 20

/* let expresion = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

const proof = (correo) =>{
    (expresion.test(correo))?console.log("Es un correo valido"):console.log("No es un correo valido")
}

proof("angulocita@gmail.com"); */

// Ejercicio 19

/* let nameExpresion = /^[a-záéíóúñ]+([ ]?[a-z])+$/gi;

const valida = (nombre) =>{
    (nameExpresion.test(nombre))?console.log("Nombre valido"):console.log("Nombre invalido");
}

valida("Juan Angulo") */

// Ejercicio 21

/* const cuadrado = (arrayNumbers) => {
    const arrayNumbersElevate = []

    arrayNumbers.forEach(element => {
        arrayNumbersElevate.push(Math.pow(element,2));
    });
    console.log(arrayNumbersElevate);
}

cuadrado([5,6,7]); */

// Ejercicio 22

/* const menorMayor = (numeros) => {
    let menor = numeros[0];
    let mayor = numeros[0];

    const arrayNums = [];
    numeros.forEach(element => {
        if ((element > mayor)) {
            mayor = element;
        }
        if ((element < menor) ){
            menor = element;
        }
    });

    arrayNums.push(menor);
    arrayNums.push(mayor);

    console.log(arrayNums);
}

menorMayor([3,-55,5,7,5,85,9]); */

// Ejercicio 23

/* const parOdd = (number) => {
    const par = [];
    const odd = [];

    number.forEach(element => {
        ((element % 2 == 0))?par.push(element):odd.push(element);
    });
    console.log(par);
    console.log(odd);
}

parOdd([5,6,7,96,5,4]); */

// Ejercicio 25 

const repeat = (nums) =>{
    return console.log(nums.filter((value,index,self)=>self.indexOf(value)===index))
    /*En este caso self es el arreglo original y lo esta comparando contra los valores generados por el filter */
}



repeat([5,true,6,5,7,7,false,true]);

// Ejercicio 26 

/* const average = (values) => {
    let valor = 0;
    values.forEach(element => {
        valor += element;
    });
    valor = valor / values.length;
    console.log(valor);
}

average([5,6,7,8,9,10]); */

// Ejercicio 24

const upForw = val =>{
    /* const upward = [];
    let cont = val.length;
   
    while (val.length > 0) {
        val.forEach((element,index) => {
            for (let i = 0; i < val.length; i++) {
                if (element >= val[i]) {
                    cont--;
                }
            }
            if(cont === 0){
                upward.push(element);
                val.splice(index,1)
                cont = val.length;
            }else{
                cont = val.length;
            }
        });

    }
    console.log(upward.reverse());
    console.log(upward.reverse()); */ // FORMA 1, la mas larga

    /* val.sort((a,b) => {return a-b})
    console.log(val.reverse());
    console.log(val.reverse()); */ // Forma 2, corta

    

    
}

upForw([3,5,48,6,3]);