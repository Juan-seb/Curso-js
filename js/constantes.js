export const PI = Math.PI;

/* const saludar = name =>{console.log(`Hola ${name} bienvenido a los modulos`)}
Asi se exporta por default las funciones expresadas
export default saludar; */

export default function saludar (name){
    console.log(`Hola ${name} bienvenido a los modulos`) /* Esto se puede hacer puesto que las funciones declaradas aplican
    un proceso de hoisting */
}