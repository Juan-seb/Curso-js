// setTimeout y setInterval

/* console.log("inicio")
setTimeout(() => {
    console.log("Esto se ejecuto en 10 segs y una sola vez")
}, 4000);

setInterval(() => {
    console.log("Set interval, se ejecuta cada intervalo de tiempo")
}, 1000);

const temp = setTimeout(() => {
    console.log(new Date().toLocaleTimeString())

}, 1000);

const temporizador = setInterval(() => {
    console.log(new Date().toLocaleTimeString())

}, 1000);

setTimeout(() => {
    clearTimeout(temporizador);
}, 2000);

clearInterval(temporizador); */

//Asincronia y evento loop

// Codigo sincrono bloqueante

/* (() => {
    console.log("Codigo sincrono");
    console.log("Inicio");
    
    function dos() {
        console.log("Dos")
    }
    
    function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();

    console.log("Fin");
})(); */

// Codigo asincrono no bloqueante

/* (() => {
    console.log("Codigo asincrono");
    console.log("Inicio");
    
    function dos() {
        setTimeout(function() {
            console.log("Dos")
        }, 1000);
    }
    
    function uno() {
        setTimeout(function() {
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})(); */

// CALLBACKS

/* const cuadradoCallback = (value, callback) => {
    setTimeout(() => {
        callback(value,value*value)
    }, 0 | Math.random()*1000);
}

cuadradoCallback(5,(value,result)=>{
    console.log("Inicia Callback");
    console.log(`Callback: ${value} , ${result}`);
    cuadradoCallback(5,(value,result)=>{
        console.log(`Callback: ${value} , ${result}`)
    });
}); 

//Aqui el callback es un objeto.

const cuadradoCallback = (value, callback) => {
    setTimeout(() => {
        callback({
            value,
            result: Math.pow(value,2)
        })
    }, 0 | Math.random()*1000);
}

cuadradoCallback(5,(obj)=>{
    console.log("Inicia Callback");
    console.log(`Callback: ${obj.value} , ${obj.result}`);
    cuadradoCallback(5,(obj)=>{
        console.log(`Callback: ${obj.value} , ${obj.result}`)
    });
});
*/

// PROMISES (PROMESAS)

/* const cuadradoPromise = (value) => {
    if (typeof value !== "number") {
        return Promise.reject(`Error el valor ${value} no es un numero`)
    }
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            resolve({
                value,
                result: value*value
            }
            )
        }, 0 | Math.random()*1000);
    });
}

cuadradoPromise(0)
    .then((obj) => {
        console.log(`Promise ${obj.value} y ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then((obj) => {
        console.log(`Promise ${obj.value} y ${obj.result}`);
        return cuadradoPromise("3");
    })
    .then((obj) => {
        console.log(`Promise ${obj.value} y ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then((obj) => {
        console.log(`Promise ${obj.value} y ${obj.result}`);
        
    })
    .catch((err)=>console.error(err)); */

/* const cuadradoPromise2 = (value) => {
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            resolve(Math.pow(value,2))
        }, 0 | Math.random()*1000);
    });
}

cuadradoPromise2(2)
    .then((obj) => {
        console.log(obj);
    }) */


// ASYNC - AWAIT

/* const cuadradoPromise = (value) => {
    if (typeof value !== "number") {
        return Promise.reject(`Error el valor ${value} no es un numero`)
    }
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            resolve({
                value,
                result: value*value
            })
            
        }, 0 | Math.random()*1000);
    });
}

async function funcionAsincrona() {
    try {
        
        console.log("Inicio de funcion asincrona");
        let obj = await cuadradoPromise(0);
        console.log(`Async function ${obj.value} y ${obj.result}`); 

        obj = await cuadradoPromise(1);
        console.log(`Async function ${obj.value} y ${obj.result}`); 

        obj = await cuadradoPromise("2");
        console.log(`Async function ${obj.value} y ${obj.result}`); 


    } catch (error) {
        console.error(error);
    }
}

funcionAsincrona();

const funcionAsincronaExpresada = async() => {
    try {
        
        console.log("Inicio de funcion asincrona expresada");
        let obj = await cuadradoPromise(3);
        console.log(`Async function ${obj.value} y ${obj.result}`); 

        obj = await cuadradoPromise(4);
        console.log(`Async function ${obj.value} y ${obj.result}`); 

        obj = await cuadradoPromise(5);
        console.log(`Async function ${obj.value} y ${obj.result}`); 

        console.log("Fin")

    } catch (error) {
        console.error(error);
    }
}

funcionAsincronaExpresada();  */

// Como las funciones se ejecutaron al mismo tiempo nos dio los resultados aleatoriamente y sin ningun orden
