// SYMBOL

/* let id = Symbol("Hola");
let id2 = Symbol("Hola");

console.log(id === id2);

const NOMBRE = Symbol();
const SALUDAR = Symbol();

const persona = {
    [NOMBRE]: "Juan"
}

console.log(persona);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
    console.log(`Hola`)
}
persona[SALUDAR]();
console.log(persona);
 */

// SETS

/* const set = new Set([1,1,3,5,5,9,9,true,true]);
const set2 = new Set();

console.log(set);
console.log(set.size);

set2.add(1);
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(true);
set2.add(true);
set2.add(1);

console.log(set2)

for (const element of set2) {
    console.log(element);
}

set2.forEach(element => {
    console.log(element);
});

let arr = Array.from(set2);
console.log(arr[0]);
console.log(set.has(3)) */

// MAPS

/* let map = new Map();

map.set("nombre","Juan");
map.set("apellido","Angulo");
console.log(map.get("apellido"))
console.log(map.size)
console.log(map.has("nombre"));
console.log(map) */

/* map.delete("apellido"); */
/* console.log(map);

for (const [key,value] of map) {
    console.log(key);
    console.log(value);
}

const map2 = new Map([
    ["nombre","Juancito"]
]);

console.log(map2);

const llavesMap2 = [...map2.keys()];
const valuesMap2 = [...map2.values()];

console.log(llavesMap2,valuesMap2); */

// WEAKSETS Y WEAKMAPS

/* const ws = new WeakSet();

let valor1 = {valor1:1};
let valor2 = {valor2:2};

ws.add(valor1);
ws.add(valor2);

console.log(ws);
console.log(ws.has(valor1));

setInterval(() => {
    console.log(ws);
}, 1000);

setTimeout(() => {
    valor1 = null;
    valor2 = null;
}, 5000); */

/* const wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1,1);
wm.set(llave2,2);

console.log(wm)

console.log(wm.has(llave1));

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

console.log(wm.delete(llave2));

console.log(wm); */

// ITERABLES E ITERATORS

//const iterable = "Hola mundo";
//const iterable = [1,2,3,4,5];
//const iterable = new Set([1,2,3,3,4,5,6,6]);
/* const iterable = new Map([
    ["nombre","Juan"],
    ["apellido","Angulo"],
    ["edad",18],
]) */

/*Accediendo al iterador del iterable*/

//const iterador = iterable[Symbol.iterator]();

/*Iterador es el que accedio a la interfaz iterator */

//console.log(iterador);
/* 
console.log(iterador.next());
console.log(iterador.next()); */

/* let next = iterador.next();

while (!next.done) {
    console.log(next.value);
    next = iterador.next();
} */

// GENERATORS

/* function* iterable() {
    yield "hola";
    console.log("Paso a segundo yield");
    yield "Hola 2"
}

let iterador = iterable();
console.log(iterador.next());
console.log(iterador.next());

const arr = [...iterable()];
console.log(arr);

for (let y of iterador) {
    console.log(y);
}
 */

/* function cuadrado(valor) {
    setTimeout(() => {
        console.log({
            valor,
            resultado: Math.pow(valor,2)
        })
    }, Math.random()*1000);
}

let iterable = generador();


function* generador(){
    console.log("Inicia generador");
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    console.log("Fin cuadrado");
} 
 
for (const yiel of iterable) {
    console.log(yiel);
}
 */

// PROXIES

/* const persona = {
    nombre : "",
    apellido: "",
    edad: 0
}

const manejador = {
    
    set(obj,prop,value){
        if (Object.keys(obj).indexOf(prop)===-1) {
            return console.error(`La llave ${prop} no existe`);
        }
        obj[prop] = value;
    }
}

const juan = new Proxy(persona,manejador);
juan.nombre = "Juan";
juan.apellido = "Angulo";
juan.edad = 18;
juan.red = "Facebook";

console.log(juan);

const sancho = new Proxy(persona,manejador);

sancho.nombre = "Sancho";
sancho.apellido = "Pansa";
sancho.edad = 32;

console.log(sancho);

console.log(persona); */

// Propiedades dinamicas

/* const objUsuarios = {};
console.log(objUsuarios);

const Usuarios = ["Juan","Mama","Mimi"];
Usuarios.forEach((nombre,index) => {
    objUsuarios[`id_${index}`] = nombre;
    console.log(objUsuarios[`id_${index}`]);
});
console.log(objUsuarios); */

// THIS

/* console.log(this);
console.log(this === window);

this.nombre="Contexto global";

function imprimir() {
    console.log(this.nombre);
    console.log(this)
}

imprimir();

const obj = {
    nombre : "Contexto objeto",
    impr() {
        console.log(this.nombre);
        console.log(this)
    }
}

obj.impr();

const obj2 = {
    nombre: "Contexto objeto 2",
    imprimir
}

obj2.imprimir();

const obj3 = {
    nombre : "Contexto objeto 3",
    impr:() => {
        console.log(this.nombre);
    }
}

obj3.impr();

function Persona(nombre){
    this.nombre = nombre;
    return () => {
        console.log(this.nombre);
    }
}

const Juan = new Persona("Juan");
Juan();

const contexto = () => {
    console.log(this)
}

contexto()
 */

// CALL, APPLY Y BIND

/* console.log(this);
this.contexto = "Contexto global";

function context(nombre) {
    console.log(`Hola ${nombre} estas en el ${this.contexto}`);
}

context("Juan");

const obj = {
    contexto: "Contexto de objeto"
}

context.call(obj,"Juancito");
context.call(null,"Juancito 1");
context.call(this,"Juancito 2");

context.apply(obj,["pancho"]);
context.apply(null,["pancho 1"]);
context.apply(this,["pancho 2"]);

this.nombre = "Felipe";

const persona = {
    nombre : "Juan",
    saludar (){
        console.log(`Hola ${this.nombre}`);
    } 
}

persona.saludar();

const personaDos = {
    saludar : persona.saludar.bind(persona),
}

personaDos.saludar(); */