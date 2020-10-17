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