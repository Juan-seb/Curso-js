// Objeto XMLHttpRequest sin Fetch

(() => {
    const xhr = new XMLHttpRequest();
    const $xhr = document.getElementById('xhr');
    const $fragment = document.createDocumentFragment();


    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState !== 4) return;
        //console.log(xhr)
        if (xhr.status >= 200 && xhr.status < 300) {
            //console.log("Exito");

            const json = JSON.parse(xhr.responseText);
            //console.log(json)

            json.forEach(element => {
                const $li = document.createElement('li');
                $li.textContent = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        } else {
            //console.log("Error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `<p>Error, ${xhr.status} : ${message}</p>`
        }

        // Si queremos que un codigo se ejecute sin importar si hay error o no lo ponemos antes o despues de este if-else
        //console.log("Este codigo siempre cargara")
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.readyState;
    xhr.send();

})();

// API: Fetch

(() => {

    const $fetch = document.getElementById('fetch');
    const $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.ok ? res.json() : Promise.reject(res)

        // Ejecutamos este metodo depende de la respuesta que me vaya a devolver, puede ser un JSON
        // o una imagen o un texto, y para esto tenemos mas metodos

        // Para que el catch funcione entonces tenemos que hacer esta validacion con operador ternario, si no se cumple
        // pasa directamente al reject de la promesa

    ).then(json => {

        // Aqui hacemos el manejo de los datos y la insercion al DOM

        json.forEach(element => {
            const $li = document.createElement('li');
            $li.textContent = `${element.name} -- ${element.email} -- ${element.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);

    }).catch((err) => {
        // Parte error, que se especifica en el reject err = res
        console.log(err);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `<p>Error, ${err.status} : ${message}</p>`
    }).finally(
        // Se ejecutara sin imortar si la solicitud se da correctamente o no.
        console.log("Esto se ejecutara de cualquier manera")
    )

})();

// Fetch con async - await

(() => {
    const $fetchAsync = document.getElementById('fetch-async');
    const $fragment = document.createDocumentFragment();

    async function getData() {

        try {
            // Ponemos el await que es como la primera then.
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            // Aqui vamos a preguntar que si la peticion esta lista (ok) entonces en esa constante me vas a guardar la promesa
            // sino el flujo se ira al catch que tiene el objeto res
            const json = (res.ok) ? res.json() : Promise.reject(res),
                text = await json;
            // La variable text me guardara el objeto js (array) y este actua como el segundo then de la promesa
            /* console.log(json)
            console.log(res) */

            // Insercion al fragmento
            text.forEach(element => {
                const $li = document.createElement('li');
                $li.textContent = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            // Inserción al DOM
            $fetchAsync.appendChild($fragment);

        } catch (err) {
            // El err es el mismo objeto response.
            //console.log(err);
            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `<p>Error, ${err.status} : ${message}</p>`
        } finally {
            // Bloque de codigo que se ejecuta sin importar si la peticion se completa o no (genera error).
            console.log("Siempre te vas a ejecutar")
        }

    }

    getData();

})();

// AJAX: Con libreria axios.

(() => {
    const $axios = document.getElementById('axios');
    const $fragment = document.createDocumentFragment();

    // Llamada a la libreria axios y uso del metodo get para acceder al API y traer los usuarios.

    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            // Axios me crea un objeto personalizado en donde ya no tengo que parsear la informacion pues tiene una
            // propiedad data que me es un arreglo con toda la informacion obtenida
            const data = res.data;
            // Insercion del contenido al DOM
            data.forEach(element => {
                const $li = document.createElement('li');
                $li.textContent = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });

            $axios.appendChild($fragment);

        })
        .catch((err) => {
            // Axios hace por si mismo el manejo del error y crea un objeto de error, llamado response
            // en este podemos acceder al statusText o al status, etc.
            console.log(err.response);
            let message = err.response.statusText || "Ocurrio un error";
            $axios.innerHTML = `<p>Error, ${err.response.status} : ${message}</p>`
        })
        .finally(() => {
            // Parte del codigo que siempre se ejecutara.
            console.log("Te ejecutas siempre pero ahora con axios");
        });

})();

// AXIOS CON Async - Await.

(() => {
    const $axiosAsync = document.getElementById('axios-async');
    const $fragment = document.createDocumentFragment();

    async function axiosAsync() {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            const data = await res.data;

            data.forEach(element => {
                const $li = document.createElement('li');
                $li.textContent = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);

        } catch (err) {
            console.log(err.response)
            let message = err.response.statusText || "Ocurrio un error inesperado"
            $axiosAsync.textContent = `Error ${err.response.status} , ${message}`
        } finally {
            console.log("Codigo que se ejecuta, axios con async")
        }
    }

    axiosAsync();
})();