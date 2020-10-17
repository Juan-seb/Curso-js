export function responsiveSlider(btnNext, btnBefore, active, slider) {
    const d = document;
    const $sliders = d.querySelectorAll(slider)
    let posicion = 0;

    d.addEventListener('click', (e) => {
        if (e.target.matches(btnNext)) {

            // Forma 1 Cambio de clases por medio de elementos hermanos, poco rentable pero la mía

            /* const $active = d.querySelector(".activo");
            let $cambio = $active.nextElementSibling;

            if ($cambio != null) {
                $active.classList.replace(active,"desactivado")
                $cambio.classList.replace("desactivado",active);
            }else{
                $active.classList.replace(active,"desactivado")
                const $next = d.querySelector(".next");
                $next.classList.replace("desactivado",active)
            } */

            // Forma 2, podemos traer con un querySelectorAll todos los nodos de la responsive slider, de esta manera
            // nos movemos entre los nodos y ademas de eso podemos solo quitar las clases. No intercambiarlas.

            $sliders[posicion].classList.remove(active)
            posicion++;
            if (posicion > $sliders.length - 1) {
                posicion = 0;
                $sliders[posicion].classList.add(active)
            } else {
                $sliders[posicion].classList.add(active)
            }
        }
    });

    d.addEventListener('click', (e) => {
        if (e.target.matches(btnBefore)) {
            // Forma 1 Cambio de clases por medio de elementos hermanos, poco rentable pero la mía
            /* const $active = d.querySelector(".activo");
            let $cambio = $active.previousElementSibling;

            if ($cambio != null && $cambio.classList.contains("desactivado")) {
                $active.classList.replace(active,"desactivado")
                $cambio.classList.replace("desactivado",active);
            }else{
                $active.classList.replace(active,"desactivado")
                const $before = d.querySelector(".before");
                $before .classList.replace("desactivado",active)
            } */

            // Forma 2, podemos traer con un querySelectorAll todos los nodos de la responsive slider, de esta manera
            // nos movemos entre los nodos y ademas de eso podemos solo quitar las clases.

            $sliders[posicion].classList.remove(active);
            posicion--;

            if (posicion < 0) {
                posicion = $sliders.length - 1;
                $sliders[posicion].classList.add(active);
            } else {
                $sliders[posicion].classList.add(active);
            }
        }
    })

}