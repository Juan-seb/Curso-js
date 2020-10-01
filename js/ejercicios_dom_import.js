export function hamburgerMenu(btn, panel, link) {
    // el btn es la clase con la que se activara el menu de hamburguesa, el panel es como tal el menu que solo
    // haremos un cambio en la clase css para que funcione, el link es la clase en el html para que este menu se 
    // desactive al presionar un link.
    const d = document;
    d.addEventListener('click', (e) => {

        if ((e.target.matches(`${btn} *`)) || e.target.matches(btn)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(btn).classList.toggle("is-active");
        }

        if (e.target.matches(link)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(btn).classList.toggle("is-active");
        }


    });
}

export function relojDigital(btnReloj, btnParar, texto) {
    const d = document;
    let temp;

    // Es necesario guardar en una variable el intervalo debido a que este tiene que parar.

    d.addEventListener('click', (e) => {

        if (e.target.matches(btnReloj)) {
            d.querySelector(btnReloj).setAttribute("disabled", "false");
            temp = setInterval(() => {
                d.querySelector(texto).textContent = new Date().toLocaleTimeString();
            }, 1000);
        }

        if (e.target.matches(btnParar)) {
            clearInterval(temp);
            d.querySelector(texto).textContent = null;
            d.querySelector(btnReloj).removeAttribute("disabled")
        }

    });
}

export function alarmaSonora(btnReproducir, btnParar, audio) {
    const d = document;
    // btnReproducir clase del boton con el que iniciamos a reproducir, btnParar clase con la que paramos el sonido,
    // audio es el id o clase del audio que introducimos en el html
    d.addEventListener('click', (e) => {
        if (e.target.matches(btnReproducir)) {
            // El metodo play se usa para iniciar la reproduccion de un elemento
            d.querySelector(audio).play();
            d.querySelector(btnReproducir).setAttribute("disabled", "true");
        }

        if (e.target.matches(btnParar)) {
            d.querySelector(audio).pause();
            d.querySelector(audio).currentTime = 0;
            d.querySelector(btnReproducir).removeAttribute("disabled");

        }
    });
}

export function moverPelota(e, pelota, marco) {
    // e es el evento keydown, pelota nos referimos al div que corresponde a la pelota y marco nos referimos
    // al area en donde se puede mover la pelota
    let x = 0;
    let y = 0;

    const $pelota = document.querySelector(pelota);
    const $area = document.querySelector(marco);
    // getBoundingClientRect es un metodo que me devuelve varios valores como el punto en donde esta dibujado el
    // elemento con respecto al padre y su posicion con respecto al top, left, bottom, right
    const limites = $area.getBoundingClientRect();
    const limPelota = $pelota.getBoundingClientRect();

    switch (e.key) {
        case "ArrowDown":
            if (limPelota.bottom < limites.bottom) {
                e.preventDefault();
                y++;
            }
            break;

        case "ArrowUp":
            if (limites.top < limPelota.top) {
                e.preventDefault();
                y--;
            }
            break;

        case "ArrowLeft":
            if (limPelota.left > limites.left) {
                e.preventDefault();
                x--;
            }
            break;

        case "ArrowRight":
            if (limPelota.right < limites.right) {
                e.preventDefault();
                x++;
            }
            break;
    }
    $pelota.style.transform = `translate(${x * 15}px , ${y * 15}px)`;
}

export function tiempoRestante(texto, hora, mensaje) {
    // texto es el parrafo donde se ira poniendo el reloj, hora es la hora en que queremos que termine la cuenta,
    // mensaje es lo que vamos a mostrar en el momento en que se termine la cuenta regresiva
    const milisegundos = 1000;
    const minutes = milisegundos * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const horaObjetivo = new Date(hora);

    const $tiempo = document.querySelector(texto);

    let tiempo;

    tiempo = setInterval(() => {
        let horaActual = new Date();
        let intervalo = horaObjetivo - horaActual;

        let dias = Math.floor(intervalo / days);
        let horas = Math.floor((intervalo % days) / hours);
        (horas > 0) ? "" : horas = "0" + horas
        let minutos = Math.floor((intervalo % hours) / minutes);
        (minutos > 9) ? "" : minutos = "0" + minutos
        let segundos = Math.floor(((intervalo % minutes) / milisegundos));
        (segundos > 9) ? "" : segundos = "0" + segundos

        $tiempo.textContent = `Faltan: ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;

        if (intervalo < 0) {
            clearInterval(tiempo);
            $tiempo.textContent = mensaje;
        }

    }, 1000);
}

export function botonScroll(btnScroll, btnActive) {
    // btnScroll es la clase del boton, y btnActive es la clase CSS que usamos para que el boton aparezca
    const $botonScroll = document.querySelector(btnScroll);

    document.addEventListener('scroll', e => {

        if (scrollY > 200) {
            $botonScroll.classList.add(btnActive);
        } else {
            $botonScroll.classList.remove(btnActive);
        }
    });

    document.addEventListener('click', (e) => {

        if (e.target.matches(btnScroll)) {
            scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    })
}

export function botonDarkLight(btnDark, dataAtribute, classDark, classDarkBoton) {
    // btnDark corresponde a la clase del boton, dataAtribute al NodeList que tenemos con los elementos que contienen ese
    // atributo, classDark es la clase que usamos para darle el estilo dark y classDarkBoton es la clase nueva del boton
    const d = document;
    const $boton = d.querySelector(btnDark);
    const $elements = d.querySelectorAll(dataAtribute)

    d.addEventListener('click', (e) => {
        if (e.target.matches(btnDark)) {

            $boton.classList.toggle(classDarkBoton);
            $elements.forEach(element => {
                element.classList.toggle(classDark);
            });

            if ($boton.classList.contains(classDarkBoton)) {
                localStorage.setItem('dark', 'active');
            } else {
                localStorage.removeItem('dark');
            }

        }
    });

    d.addEventListener('DOMContentLoaded', (e) => {
        if (localStorage.getItem('dark') === 'active') {
            $boton.classList.add(classDarkBoton)
            $elements.forEach(element => {
                element.classList.add(classDark);
            });
        }
    });

}

export function responsiveJavascript(id, mediaQuerie, contMovil, contEscritorio) {
    // La media Querie es la que nos indica en que momento pasara de contenido movil al del escritorio
    const $contenido = document.getElementById(id)
    let breakpoint = matchMedia(mediaQuerie);
    
    const responsiv = (e) => {
        // Este `e` no es el evento sino el mediaQueryList
        if (e.matches) {
            $contenido.innerHTML = contEscritorio;
        } else {
            $contenido.innerHTML = contMovil;
        }
    };

    // Misma funcion con el evento resize
    /* window.addEventListener('resize',(e)=>{
        responsiv(breakpoint)
    }) */
    breakpoint.addEventListener('change', responsiv);
    responsiv(breakpoint);
}