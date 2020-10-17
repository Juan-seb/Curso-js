export function scrollSpy(secciones, id, classHighlight) {
    // Traemos todas las secciones del html para que de esta forma a cada una le podamos agregar un observador
    const $contenedores = document.querySelectorAll(secciones)
    // Son la configuracion que va a tener nuestro observador al momento de empezar a ejecutarse,
    // el threshold corresponde al porcentaje de visualizacion del elemento observado, Si quiere ejecutar la 
    //función callback cada vez que la visibilidad pase otro 25%, usted debería especificar el array [0, 0.25, 0.5, 0.75, 1].
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.50, 0.7]
    }

    // Esta callback se ejecuta cada que el observador vea que el threshold ha cambiado.

    const intersectionCallback = (entries) => {

        entries.forEach((entry) => {
            let target = entry.target.getAttribute(id);
            const $scroll = document.querySelector(`.${target}`);
            // El isIntersecting corresponde a si el threshold se aplica, el porcentaje de visualizacion
            if (entry.isIntersecting) {
                $scroll.classList.add(classHighlight)
            } else {
                $scroll.classList.remove(classHighlight)
            }

        });
    }
    // Nota : El callback del observador se ejecuta cuando el porcentaje, o el array de porcentajes se aplican.
    const observer = new IntersectionObserver(intersectionCallback, options);

    $contenedores.forEach(element => {
        observer.observe(element);
    });
}