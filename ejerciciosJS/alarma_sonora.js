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