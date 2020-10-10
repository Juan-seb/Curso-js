import {
    hamburgerMenu,
    relojDigital,
    alarmaSonora,
    moverPelota,
    tiempoRestante,
    botonScroll,
    botonDarkLight,
    responsiveJavascript,
    formTester,
    detectionDevices,
    conexion,
    webCam,
    geolocation,
    searchFilter,
    sorteo} from './ejercicios_dom_import.js'

document.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu(".btn__oculto", ".menu__main-oculto", ".menu__link");
    relojDigital(".botonHora", ".botonDetener", ".hora");
    alarmaSonora(".iniciarAlarma", ".detenerAlarma", ".audio");
    tiempoRestante(".tiempo", "September 28, 2021 06:25:00", "Llegamos del centro ehhhh")
    botonScroll(".btn__scroll", "is-active__scroll");
    responsiveJavascript(
        'youtube',
        '(min-width: 1024px)',
        `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener">Enlace video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>`)

    responsiveJavascript(
        'maps',
        '(min-width: 1024px)',
        `<a href="https://goo.gl/maps/4WqAB1mVpUZaVRou5" target="_blank" rel="noopener">Enlace mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.80916723125!2d-74.06764138573683!3d4.628109843572591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a286d598bd5%3A0xddf14904a87dfb47!2sUniversidad%20Distrital%20Francisco%20Jos%C3%A9%20de%20Caldas!5e0!3m2!1ses!2sco!4v1601529366652!5m2!1ses!2sco" 
        width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" 
        tabindex="0"></iframe>`);

    formTester("form");
    detectionDevices('.userAgent');
    webCam('video__camara');
    searchFilter(".card-filter",".card");
    sorteo(".btn_ganador",".sorteo")
});

document.addEventListener('keydown', (e) => {
    moverPelota(e, ".pelota", ".area");
})

botonDarkLight(".btn__color", "[data-dark]", "dark__mode", "is-active__color");
conexion(".conection",'is-active__conection');
geolocation(".locate")
